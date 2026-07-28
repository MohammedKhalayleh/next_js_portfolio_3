'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/lib/hooks';

export default function SignalPath() {
  const svgRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY / docHeight;
      setScrollProgress(Math.min(scrolled, 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!svgRef.current || prefersReducedMotion) return;

    const svg = svgRef.current;
    const path = svg.querySelector('path');
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length * (1 - scrollProgress);
  }, [scrollProgress, prefersReducedMotion]);

  return (
    <svg
      ref={svgRef}
      className="fixed left-0 top-0 w-full h-full pointer-events-none z-10"
      style={{ opacity: 0.15 }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="signalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgb(15, 166, 120)" stopOpacity="0" />
          <stop offset="50%" stopColor="rgb(15, 166, 120)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="rgb(15, 166, 120)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M 100 100 Q 200 200 150 400 T 250 800 Q 300 1000 200 1200 T 350 1600"
        stroke="url(#signalGradient)"
        strokeWidth="2"
        fill="none"
        vectorEffect="non-scaling-stroke"
        style={{
          transition: 'stroke-dashoffset 0.016s linear',
        }}
      />
    </svg>
  );
}
