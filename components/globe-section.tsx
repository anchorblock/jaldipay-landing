"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import CountryFlagsMarquee from "./country-flags-marquee";

const stats = [
  {
    value: 30,
    prefix: "$",
    suffix: "B",
    description: "Sent home by Bangladeshi workers living abroad, making it 8th largest remittance recipient in the world",
  },
  {
    value: 50000,
    prefix: "",
    suffix: "",
    description: "Bangladeshi students travel abroad each year paying billions in tuition and living expenses",
  },
  {
    value: 175,
    prefix: "",
    suffix: "M",
    description: "Untapped market size for global digital payments. Bangladesh has only 1.5% population holding credit cards.",
  },
];

function AnimatedStat({
  value,
  prefix,
  suffix,
  description,
  delay,
}: {
  value: number;
  prefix: string;
  suffix: string;
  description: string;
  delay: number;
}) {
  const [count, setCount] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => {
            setCount(0);
            const duration = 2000;
            const startTime = Date.now();

            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 4);
              setCount(Math.floor(eased * value));

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(value);
              }
            };

            requestAnimationFrame(animate);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, delay, hasAnimated]);

  const formatValue = (n: number) => {
    if (value >= 1000) return n.toLocaleString();
    return n.toString();
  };

  return (
    <div ref={ref}>
      <h3 className="text-3xl font-light text-[#26db00] md:text-4xl">
        {prefix}
        {formatValue(count)}
        {suffix && <span> {suffix}</span>}
      </h3>
      <p className="mt-2 text-sm text-white/70 leading-relaxed">{description}</p>
    </div>
  );
}

// World map SVG as data URI for pixel sampling (same as HTML reference)
const WORLD_MAP_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='360' height='180'%3E%3Crect fill='%23000' width='360' height='180'/%3E%3Cpath fill='%23fff' d='M50,40 L90,40 L90,80 L50,80 Z M110,30 L150,30 L150,75 L110,75 Z M170,50 L200,50 L200,90 L170,90 Z M210,35 L270,35 L270,100 L210,100 Z M280,45 L320,45 L320,85 L280,85 Z M60,100 L110,100 L110,140 L60,140 Z M200,110 L240,110 L240,145 L200,145 Z'/%3E%3C/svg%3E";

function ThreeGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  const initGlobe = useCallback(async () => {
    if (!containerRef.current) return;

    const THREE = await import("three");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1200 / 800, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(1200, 800);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "50%";
    renderer.domElement.style.left = "50%";
    renderer.domElement.style.transform = "translate(-50%, -50%)";
    containerRef.current.appendChild(renderer.domElement);

    // Load world map and sample pixels to create dot positions
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = WORLD_MAP_SVG;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = 360;
      canvas.height = 180;
      ctx.drawImage(img, 0, 0, 360, 180);

      const imageData = ctx.getImageData(0, 0, 360, 180);
      const positions: number[] = [];

      // Sample pixels - if white (land), create dot on sphere
      for (let y = 0; y < 180; y += 2) {
        for (let x = 0; x < 360; x += 2) {
          const i = (y * 360 + x) * 4;
          const brightness = imageData.data[i];

          if (brightness > 128) {
            const lat = 90 - (y / 180) * 180;
            const lng = (x / 360) * 360 - 180;

            const phi = (90 - lat) * (Math.PI / 180);
            const theta = (lng + 180) * (Math.PI / 180);
            const r = 1.25;

            positions.push(
              -r * Math.sin(phi) * Math.cos(theta),
              r * Math.cos(phi),
              r * Math.sin(phi) * Math.sin(theta)
            );
          }
        }
      }

      // Create globe from dots
      const dots = new THREE.BufferGeometry();
      dots.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );

      const dotMaterial = new THREE.PointsMaterial({
        color: 0x6eff9e,
        size: 0.015,
        transparent: true,
        opacity: 0.8,
      });

      const globeDots = new THREE.Points(dots, dotMaterial);
      scene.add(globeDots);

      // Animation loop
      const animate = () => {
        animationRef.current = requestAnimationFrame(animate);
        globeDots.rotation.y += 0.0012;
        renderer.render(scene, camera);
      };
      animate();
    };

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationRef.current);
      renderer.dispose();
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    initGlobe().then((fn) => {
      cleanup = fn;
    });

    return () => {
      cancelAnimationFrame(animationRef.current);
      cleanup?.();
    };
  }, [initGlobe]);

  return (
    <div
      ref={containerRef}
      className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none hidden lg:block"
      style={{
        zIndex: 1,
        opacity: 0.55,
      }}
    />
  );
}

export default function GlobeSection() {
  return (
    <section id="how-it-works" className="relative overflow-hidden h-[600px]">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(11, 43, 3, 0.8) 0%, rgba(0, 0, 0, 0.95) 70%)",
        }}
      />

      {/* Three.js 3D Globe */}
      <ThreeGlobe />

      <div className="relative z-10 h-full flex flex-col justify-center pl-[100px] pr-[50px]">
        {/* Country Flags inline with label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[13px] font-normal text-[#6eff9e] whitespace-nowrap">
            Send money to 50+ countries worldwide
          </span>
          <div className="flex-1 overflow-hidden">
            <CountryFlagsMarquee inline />
          </div>
        </div>

        <h2 className="text-2xl font-extralight text-white md:text-4xl lg:text-[43.2px] leading-[1.2]">
          Connect to the
          <br />
          global digital economy
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/70 max-w-lg">
          JaldiPay makes transferring money as easy and secure as moving data. Our network spans across continents saving physical visits, SWIFT fees, paperwork and waiting for days.
        </p>

        {/* Stats */}
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:gap-[100px]">
          {stats.map((stat, i) => (
            <AnimatedStat key={i} {...stat} delay={i * 200} />
          ))}
        </div>
      </div>
    </section>
  );
}
