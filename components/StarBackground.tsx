"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine"; 

export default function StarBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000000",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: true,
          },
          size: {
            value: 1.5,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "trail",
            },
          },
          modes: {
            trail: {
              delay: 0.2,
              quantity: 2,
              particles: {
                color: {
                  value: "#ffffff",
                },
                move: {
                  speed: 0.5,
                  direction: "top-right",
                },
              },
            },
          },
        },
      }}
    />
  );
}
