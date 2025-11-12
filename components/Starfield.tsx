'use client';

import { useEffect, useRef } from 'react';
import './Starfield.css';

interface StarfieldProps {
  starCount?: number;
  style?: React.CSSProperties;
}

export default function Starfield({ starCount = 200, style }: StarfieldProps) {
  const starfieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starfieldRef.current) return;

    const container = starfieldRef.current;

    // Generate stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';

      // Random position - concentrate stars in upper 50% of screen
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 50}%`;

      // Random size category
      const sizeRandom = Math.random();
      if (sizeRandom < 0.6) {
        star.classList.add('star-small');
      } else if (sizeRandom < 0.9) {
        star.classList.add('star-medium');
      } else {
        star.classList.add('star-large');
      }

      // Some stars have purple tint
      if (Math.random() < 0.2) {
        star.classList.add('star-purple');
      }

      // Random animation duration and delay for varied twinkling
      const duration = 2 + Math.random() * 4; // 2-6 seconds
      const delay = Math.random() * 5; // 0-5 seconds
      star.style.animationDuration = `${duration}s`;
      star.style.animationDelay = `${delay}s`;

      container.appendChild(star);
    }

    // Cleanup
    return () => {
      container.innerHTML = '';
    };
  }, [starCount]);

  return (
    <div
      ref={starfieldRef}
      className="starfield"
      style={style}
    />
  );
}
