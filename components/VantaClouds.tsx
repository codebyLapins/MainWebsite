'use client';

import { useEffect, useRef } from 'react';

interface VantaCloudsProps {
  style?: React.CSSProperties;
}

export default function VantaClouds({ style }: VantaCloudsProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    // Load THREE.js and Vanta dynamically
    const loadScripts = async () => {
      // Load THREE.js
      if (!(window as any).THREE) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      // Load Vanta Clouds
      if (!(window as any).VANTA) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      // Initialize Vanta effect
      if ((window as any).VANTA && vantaRef.current) {
        vantaEffect.current = (window as any).VANTA.CLOUDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          skyColor: 0x0a0a0a,
          cloudColor: 0x4a388f,
          cloudShadowColor: 0x2d1f5c,
          sunColor: 0x9b7fd9,
          sunGlareColor: 0x5227ff,
          sunlightColor: 0xff9ffc,
          speed: 1.5
        });

      }
    };

    loadScripts();

    // Cleanup function
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        width: '100%',
        height: '100%',
        ...style
      }}
    />
  );
}
