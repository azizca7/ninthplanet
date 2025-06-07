'use client';

import React from 'react';
import { Youtube, Apple } from 'lucide-react';
import { FaSpotify } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SocialLinks from '@/components/ui/SocialLinksYamadzhi';
import StarBackground from '@/components/StarBackground';
import Link from 'next/link';

interface Project {
  artist: string;
  title: string;
  cover: string;
  description: string;
  links: { [key: string]: string };
}

const projects: Project[] = [
  {
    artist: 'Ruxsora Emm',
    title: 'Gaza Bas',
    cover: '/portfolio/ruhsoraemm.png',
    description: 'Альбом “8 Hours”Мощный жанровый эксперимент с глубиной и атмосферой.',
    links: {
      'Spotify': 'https://open.spotify.com/track/4L3MgAy6RMZ8yN4g1p5fiy?si=98236718fd9c4118',
      'YouTube': 'https://youtu.be/oiwM5fbL_GA?si=NaEQQ6qDRkAfV58I',
      'Apple Music': 'https://music.apple.com/uz/song/gaza-bas/1802864096',
    },
  },
  {
    artist: 'Yamadzhi & Feydzhi',
    title: 'Minimum',
    cover: '/portfolio/minimum.png',
    description: '100+ миллионов прослушиваний.Минимализм, ставший культурным символом.',
    links: {
      'Spotify': 'https://open.spotify.com/track/4bj2sAArcwE89Bcm5zdcHM?si=197d34b6ba9e4dc3',
      'YouTube': 'https://youtu.be/Sf6SVXQptaM?si=Aoy6yfhxZcC3TDsD',
      'Apple Music': 'https://music.apple.com/uz/song/%D0%BC%D0%B8%D0%BD%D0%B8%D0%BC%D1%83%D0%BC/1475132190',
    },
  },
  {
    artist: 'Ulukmanapo',
    title: 'Хотела Делать',
    cover: '/portfolio/Ulukmanapo.png',
    description: 'Баланс эмоции и звука, драматургия и стиль.',
    links: {
      'Spotify': 'https://open.spotify.com/track/0k0PH5saVmFyyBNIH70PXx?si=62c07dd581c2448e',
      'YouTube': 'https://youtu.be/I1I2vgq86KA?si=dNpw1h4HxvNpCU3a',
      'Apple Music': '',
    },
  },
  {
    artist: 'Gafur',
    title: 'OK',
    cover: '/portfolio/gafurOk.png',
    description: 'Современный хит, танцевальный и дерзкий.',
    links: {
      'Spotify': 'https://open.spotify.com/track/76QZdYZ1TmusNljul7Yjkq?si=0963c6040b954d16',
      'YouTube': 'https://youtu.be/icH8G3RqUWs?si=yFhxVMjFQn91rw7p',
      'Apple Music': 'https://music.apple.com/uz/song/ok/1570266231',
    },
  },
  {
    artist: 'Gafur',
    title: 'О Любви',
    cover: '/portfolio/gafurOlyubvi.png',
    description: 'Глубокий мелодизм, честное звучание.',
    links: {
      'Spotify': 'https://open.spotify.com/track/5ygKmcxTSlTo8aOQDS7ugk?si=10ac6b16b06b4661',
      'YouTube': 'https://youtu.be/kR4rHXyq4uQ?si=uteexfJS1u0A1mip',
      'Apple Music': 'https://music.apple.com/uz/song/%D0%BE-%D0%BB%D1%8E%D0%B1%D0%B2%D0%B8/1728271855',
    },
  },
  {
    artist: 'Sunami',
    title: 'Под Луной',
    cover: '/portfolio/sunami.png',
    description: 'Лирика и продюсерская магия под ночным небом.',
    links: {
      'Spotify': 'https://open.spotify.com/track/0y9WhkkBEaGqG92vhYfg3V?si=2702e58400ea4a79',
      'YouTube': 'https://youtu.be/FwU8ocRoQX8?si=I8Jtoj-j17Vo4mRh',
      'Apple Music': 'https://music.apple.com/uz/song/%D0%BF%D0%BE%D0%B4-%D0%BB%D1%83%D0%BD%D0%BE%D0%B9/1548678475',
    },
  },
  {
    artist: 'JONY',
    title: 'Камнепад',
    cover: '/portfolio/jonyKamnepad.png',
    description: 'Продюсерский хук, который давит как бит.',
    links: {
      'Spotify': 'https://open.spotify.com/track/124gqpPkZjE5bUkgaDmYV5?si=6b545ef8648d4daa',
      'YouTube': 'https://youtu.be/6T2f8KKf0kI?si=SBG2IRYdoXFj7bF7',
      'Apple Music': 'https://music.apple.com/uz/song/%D0%BA%D0%B0%D0%BC%D0%BD%D0%B5%D0%BF%D0%B0%D0%B4/1564787680',
    },
  },
  {
    artist: 'Andro',
    title: 'Романтики',
    cover: '/portfolio/androRomantiki.png',
    description: 'Музыка, говорящая за чувства.',
    links: {
      'Spotify': 'https://open.spotify.com/track/0pbI38rcjYWXz9dYQ0deg0?si=c99e555f11814613',
      'YouTube': 'https://youtu.be/O_3TikSjreA?si=LkT45O8e00Air-W7',
      'Apple Music': 'https://music.apple.com/uz/song/%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D1%82%D0%B8%D0%BA%D0%B8/1727760238',
    },
  },
];
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function PortfolioPage() {
  const platformIcons: { [key: string]: React.ReactNode } = {
    Spotify: <FaSpotify className="w-5 h-5 mr-1 text-green-500" />,
    YouTube: <Youtube className="w-5 h-5 mr-1 text-red-500" />,
    'Apple Music': <Apple className="w-5 h-5 mr-1 text-gray-300" />,
  };

  return (
    <div className="relative">
      <div className="fixed inset-0 z-[-1]">
        <StarBackground />
      </div>

      <div className=" text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ fontFamily: 'var(--font-roboto)' }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Наши проекты
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl tracking-tight  font-bold text-gray-300 mt-6"
            >
              Мы не просто пишем музыку. Мы создаём культурные моменты. Ниже — часть наших продюсерских работ. За каждой — история, саунд и стиль{' '}
              <span style={{ fontFamily: 'var(--font-beba)' }}>The Ninth Planet</span>.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.04, rotateX: 3, rotateY: -3 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform border-2 border-transparent hover:border-purple-500/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.cover}
                    alt={`${project.artist} - ${project.title}`}
                    className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl tracking-wide font-bold text-purple-300">{project.artist}</h3>
                  <h4 style={{ fontFamily: 'var(--font-roboto)' }} className="text-lg text-gray-300 font-semibold">{project.title}</h4>
                  <p style={{ fontFamily: 'var(--font-roboto)' }} className="mt-2 text-gray-400 italic text-sm">{project.description}</p>
                  <div className="mt-4 flex space-x-4">
                    {Object.entries(project.links).map(([platform, url], idx) =>
                      url ? (
                        <Link
                          key={idx}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-200 group/icon"
                        >
                          {platformIcons[platform]}
                          <span className="relative">
                            {platform}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover/icon:w-full transition-all duration-300"></span>
                          </span>
                        </Link>
                      ) : null
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <footer className="py-6 px-4 sm:px-8 border-t border-indigo-900/30">
        <SocialLinks />
        <div style={{ fontFamily: 'var(--font-roboto)' }} className="max-w-6xl mx-auto text-center mt-5">
          <p style={{ fontFamily: 'var(--font-roboto)' }} className='text-gray-400'>
              © {new Date().getFullYear()} The Ninth Planet. Все права защищены.
            </p>
        </div>
      </footer>
    </div>
  );
}
