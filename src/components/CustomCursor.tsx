import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse) and no touch / no reduced motion
    const checkIsDesktop = () => {
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsDesktop(hasFinePointer && !prefersReducedMotion && window.innerWidth > 768);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    if (!isDesktop) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('[role="button"]') ||
          target.classList.contains('interactive') ||
          target.closest('.interactive'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth trailing animation loop for the outer ring
    let animationFrameId: number;
    let currentTrailX = -100;
    let currentTrailY = -100;

    const render = () => {
      currentTrailX += (position.x - currentTrailX) * 0.18;
      currentTrailY += (position.y - currentTrailY) * 0.18;
      setTrailingPos({ x: currentTrailX, y: currentTrailY });
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('resize', checkIsDesktop);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDesktop, isVisible, position.x, position.y]);

  if (!isDesktop || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Outer Glow Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-[#00f2ff]/50 transition-transform duration-75 ease-out ${
          isHovered
            ? 'h-12 w-12 -ml-6 -mt-6 bg-[#00f2ff]/15 border-[#00f2ff] scale-125 shadow-[0_0_20px_rgba(0,242,255,0.4)]'
            : 'h-8 w-8 -ml-4 -mt-4 bg-[#00f2ff]/5'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      />
      {/* Inner Pin Dot */}
      <div
        className={`fixed top-0 left-0 h-1.5 w-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[#00f2ff] shadow-[0_0_10px_rgba(0,242,255,0.9)] transition-opacity duration-150 ${
          isHovered ? 'opacity-90 scale-75' : 'opacity-100'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </div>
  );
};
