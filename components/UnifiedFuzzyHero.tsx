'use client';

import React, { useEffect, useState } from 'react';
import FuzzyText from './FuzzyText';

interface UnifiedFuzzyHeroProps {
  texts: string[];
  baseIntensity?: number;
  hoverIntensity?: number;
  enableHover?: boolean;
  fontWeight?: number;
  color?: string;
  maxFontSize?: number;
}

const UnifiedFuzzyHero = ({
  texts,
  baseIntensity = 0.13,
  hoverIntensity = 0.72,
  enableHover = true,
  fontWeight = 900,
  color = '#ffffff',
  maxFontSize = 96 // 6rem default
}: UnifiedFuzzyHeroProps) => {
  const [unifiedFontSize, setUnifiedFontSize] = useState<number>(maxFontSize);

  useEffect(() => {
    const calculateUnifiedFontSize = () => {
      const viewportWidth = window.innerWidth;
      const isMobile = viewportWidth < 768;
      const horizontalMargin = isMobile ? 10 : 50;
      const padding = 48; // Account for px-6 (24px per side)
      const maxAllowedWidth = viewportWidth - (horizontalMargin * 2) - padding;

      // Determine initial target font size based on viewport
      let targetFontSize: number;
      if (viewportWidth < 480) {
        targetFontSize = Math.min(maxFontSize, viewportWidth * 0.18);
      } else if (viewportWidth < 768) {
        targetFontSize = Math.min(maxFontSize, viewportWidth * 0.14);
      } else {
        targetFontSize = maxFontSize;
      }

      // Create temporary canvas for measuring all texts
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return maxFontSize;

      // Find the maximum width among all texts at target font size
      let currentFontSize = targetFontSize;
      let maxTextWidth = 0;
      let iterations = 0;
      const maxIterations = 50;

      do {
        maxTextWidth = 0;

        // Measure all texts at current font size
        texts.forEach(text => {
          ctx.font = `${fontWeight} ${currentFontSize}px sans-serif`;
          const metrics = ctx.measureText(text);

          const actualLeft = metrics.actualBoundingBoxLeft ?? 0;
          const actualRight = metrics.actualBoundingBoxRight ?? metrics.width;
          const measuredWidth = Math.ceil(actualLeft + actualRight);

          if (measuredWidth > maxTextWidth) {
            maxTextWidth = measuredWidth;
          }
        });

        // If any text is too wide, reduce font size and remeasure all
        if (maxTextWidth > maxAllowedWidth) {
          currentFontSize *= 0.95;
          iterations++;
        } else {
          break;
        }
      } while (iterations < maxIterations);

      return currentFontSize;
    };

    const updateFontSize = () => {
      const calculatedSize = calculateUnifiedFontSize();
      setUnifiedFontSize(calculatedSize);
    };

    // Calculate on mount
    updateFontSize();

    // Recalculate on resize
    window.addEventListener('resize', updateFontSize);
    return () => window.removeEventListener('resize', updateFontSize);
  }, [texts, maxFontSize, fontWeight]);

  return (
    <div className="flex flex-col items-center w-full" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)' }}>
      {texts.map((text, index) => (
        <div
          key={index}
          className={`w-full flex justify-center ${index < texts.length - 1 ? 'mb-2 sm:mb-3 md:mb-4' : 'mb-2'}`}
        >
          <FuzzyText
            baseIntensity={baseIntensity}
            hoverIntensity={hoverIntensity}
            enableHover={enableHover}
            fontSize={unifiedFontSize}
            fontWeight={fontWeight}
            color={color}
            skipResponsiveCalc={true}
          >
            {text}
          </FuzzyText>
        </div>
      ))}
    </div>
  );
};

export default UnifiedFuzzyHero;
