"use client";

import { useState, useRef, useEffect, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Music,
  Users,
  Award,
  Headphones,
  Heart,
  Volume2,
  X,
} from "lucide-react";

export default function Dashboard() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(
    null
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const stats = [
    {
      name: "Прослушивания",
      value: "100M+",
      icon: Headphones,
      color: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20",
    },
    {
      name: "Подписчики",
      value: "500K+",
      icon: Users,
      color: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
    },
    {
      name: "Релизы",
      value: "50+",
      icon: Music,
      color: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "Платиновые хиты",
      value: "5",
      icon: Award,
      color: "bg-gradient-to-br from-amber-500/20 to-pink-500/20",
    },
  ];

  const recentTracks = [
    {
      id: 1,
      title: "Minimum",
      artist: "Yamadzhi x Feydzhi",
      duration: "01:53",
      src: "/audios/minimum.mp3",
    },
    {
      id: 2,
      title: "Привычки",
      artist: "Yamadzhi",
      duration: "03:51",
      src: "/audios/Привычки.mp3",
    },
    {
      id: 3,
      title: "Хотела Делать",
      artist: "Yamadzhi x Feydzhi & Ulukmanapo",
      duration: "02:51",
      src: "/audios/ХотелаДелать.mp3",
    },
    {
      id: 4,
      title: "Propaganda",
      artist: "Yamadzhi x Feydzhi",
      duration: "02:14",
      src: "/audios/Propaganda.mp3",
    },
  ];

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Playback failed:", error);

        simulatePlayback();
      });
    }
    setIsPlaying(!isPlaying);
  };

  const simulatePlayback = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    if (currentTrackIndex !== null) {
      const trackDuration = 180; 
      setDuration(trackDuration);

      progressIntervalRef.current = setInterval(() => {
        setCurrentTime((prevTime) => {
          const newTime = prevTime + 0.1;
          if (newTime >= trackDuration) {
            setIsPlaying(false);
            clearInterval(progressIntervalRef.current!);
            return 0;
          }

          setProgress((newTime / trackDuration) * 100);
          return newTime;
        });
      }, 100);
    }
  };

  const handleTrackSelect = (index: number) => {
    if (currentTrackIndex === index) {
      handlePlayPause();
    } else {
      setCurrentTrackIndex(index);
      setProgress(0);
      setCurrentTime(0);
    }
  };

  const handleProgressChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current && !isPlaying) return;

    const newProgress = Number(e.target.value);
    const newTime = (newProgress / 100) * (duration || 180);

    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }

    setProgress(newProgress);
    setCurrentTime(newTime);
  };

  const playNextTrack = () => {
    if (
      currentTrackIndex !== null &&
      currentTrackIndex < recentTracks.length - 1
    ) {
      setCurrentTrackIndex(currentTrackIndex + 1);
      setProgress(0);
      setCurrentTime(0);
    }
  };

  const playPreviousTrack = () => {
    if (currentTrackIndex !== null && currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
      setProgress(0);
      setCurrentTime(0);
    }
  };

  useEffect(() => {
    if (currentTrackIndex !== null) {
      if (audioRef.current) {
        try {
          audioRef.current.src = recentTracks[currentTrackIndex].src;
          audioRef.current.play().catch((error) => {
            console.error("Playback failed:", error);

            simulatePlayback();
          });
          setIsPlaying(true);
        } catch (error) {
          console.error("Audio error:", error);
          simulatePlayback();
          setIsPlaying(true);
        }
      } else {
        simulatePlayback();
        setIsPlaying(true);
      }
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    if (!audioRef.current) return;

    const updateTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration || 0);
        setProgress(
          (audioRef.current.currentTime / (audioRef.current.duration || 1)) *
            100
        );
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);

      if (
        currentTrackIndex !== null &&
        currentTrackIndex < recentTracks.length - 1
      ) {
        setTimeout(() => {
          setCurrentTrackIndex(currentTrackIndex + 1);
        }, 500);
      }
    };

    audioRef.current.addEventListener("timeupdate", updateTime);
    audioRef.current.addEventListener("ended", handleEnded);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateTime);
        audioRef.current.removeEventListener("ended", handleEnded);
      }
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <section className="py-16 px-4 sm:px-8 bg-gradient-to-b  min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-12"
        >
          Статистика и Достижения
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 flex flex-col items-center text-center hover:bg-zinc-800/80 hover:border-zinc-700 transition-all duration-300"
            >
              <div
                className={`p-3 rounded-full ${stat.color} mb-4 backdrop-blur-md`}
              >
                <stat.icon size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-400">{stat.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden shadow-xl"
        >
          <div className="flex flex-col md:flex-row p-6 items-center gap-6 border-b border-zinc-800">
            <div className="w-36 h-36 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-md flex items-center justify-center overflow-hidden">
              <div className="w-full h-full flex items-center justify-center relative group">
                <Music
                  size={48}
                  className="text-purple-400 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Yamadzhi
              </h3>
              <p className="text-gray-400 mb-3 m-1.5">Top tracks</p>
              <div className="flex gap-3">
                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white hover:from-purple-700 hover:to-pink-700 transition shadow-lg shadow-purple-900/20">
                  <a
                    href="https://open.spotify.com/artist/1vhOS1zU5F96OtQUoMT47i"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow
                  </a>
                </button>
              </div>
            </div>
          </div>

          {currentTrackIndex !== null && (
            <div className="px-6 py-4 border-b border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-900/80">
              <div className="flex items-center gap-4">
                <button
                  onClick={playPreviousTrack}
                  className="text-gray-400 hover:text-white disabled:opacity-50 transition"
                  disabled={currentTrackIndex === 0}
                >
                  <SkipBack size={20} />
                </button>

                <button
                  onClick={handlePlayPause}
                  className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition shadow-md"
                >
                  {isPlaying ? (
                    <Pause size={20} className="text-white" />
                  ) : (
                    <Play size={20} className="text-white ml-0.5" />
                  )}
                </button>

                <button
                  onClick={playNextTrack}
                  className="text-gray-400 hover:text-white disabled:opacity-50 transition"
                  disabled={currentTrackIndex === recentTracks.length - 1}
                >
                  <SkipForward size={20} />
                </button>

                <div className="flex-1 flex items-center gap-2">
                  <span className="text-xs text-gray-400 w-10">
                    {formatTime(currentTime)}
                  </span>
                  <div className="relative w-full h-1 bg-zinc-700 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      style={{ width: `${progress}%` }}
                    ></div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={progress}
                      onChange={handleProgressChange}
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  <span className="text-xs text-gray-400 w-10">
                    {duration
                      ? `-${formatTime(duration - currentTime)}`
                      : "00:00"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    className="text-gray-400 hover:text-white transition cursor-pointer"
                    onClick={() => {
                      setIsMuted(!isMuted);
                      if (audioRef.current) {
                        audioRef.current.muted = !isMuted;
                      }
                    }}
                  >
                    {isMuted ? (
                      <Volume2 size={18} className="text-red-500" />
                    ) : (
                      <Volume2 size={18} />
                    )}
                  </button>

                  <button
                    className="text-gray-400 hover:text-white transition cursor-pointer"
                    onClick={() => {
                      setCurrentTrackIndex(null);
                      setIsPlaying(false);
                      if (audioRef.current) {
                        audioRef.current.pause();
                      }
                      if (progressIntervalRef.current) {
                        clearInterval(progressIntervalRef.current);
                      }
                    }}
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="px-6 py-4 space-y-1">
            {recentTracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => handleTrackSelect(index)}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                className={`flex items-center justify-between p-3 rounded-md cursor-pointer transition-all duration-200 ${
                  currentTrackIndex === index
                    ? "bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-zinc-800"
                    : isHovered === index
                    ? "bg-zinc-800/50 border border-zinc-800"
                    : "hover:bg-zinc-800/50 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 text-center flex justify-center">
                    {isHovered === index ||
                    (currentTrackIndex === index && isPlaying) ? (
                      <button className="text-white">
                        {currentTrackIndex === index && isPlaying ? (
                          <Pause size={16} />
                        ) : (
                          <Play size={16} />
                        )}
                      </button>
                    ) : (
                      <span
                        className={`${
                          currentTrackIndex === index
                            ? "text-purple-400"
                            : "text-gray-400"
                        }`}
                      >
                        {track.id}
                      </span>
                    )}
                  </div>
                  <div>
                    <div
                      className={`font-medium ${
                        currentTrackIndex === index
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
                          : "text-white"
                      }`}
                    >
                      {track.title}
                    </div>
                    <div className="text-sm text-gray-400">{track.artist}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {currentTrackIndex === index && isPlaying ? (
                    <div className="w-6 h-4 flex gap-0.5 items-end">
                      <div
                        className="w-1 h-2 bg-gradient-to-t from-purple-500 to-pink-500 animate-pulse"
                        style={{ animationDuration: "0.8s" }}
                      />
                      <div
                        className="w-1 h-3 bg-gradient-to-t from-purple-500 to-pink-500 animate-pulse"
                        style={{ animationDuration: "0.6s" }}
                      />
                      <div
                        className="w-1 h-4 bg-gradient-to-t from-purple-500 to-pink-500 animate-pulse"
                        style={{ animationDuration: "1s" }}
                      />
                      <div
                        className="w-1 h-2 bg-gradient-to-t from-purple-500 to-pink-500 animate-pulse"
                        style={{ animationDuration: "0.7s" }}
                      />
                    </div>
                  ) : isHovered === index ? (
                    <button className="text-gray-400 hover:text-pink-500 transition">
                      <Heart size={16} />
                    </button>
                  ) : null}
                  <span className="text-sm text-gray-400 w-12 text-right">
                    {track.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <audio ref={audioRef} hidden />
        </motion.div>
      </div>
    </section>
  );
}
