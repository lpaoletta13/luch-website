'use client';
import { useEffect, useRef } from 'react';

export default function GlowBackground() {
  const blob1 = useRef(null);
  const blob2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (blob1.current) {
        blob1.current.style.transform = `translateY(${y * 0.25}px)`;
      }
      if (blob2.current) {
        blob2.current.style.transform = `translateY(${-y * 0.12}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // No overflow-hidden here — blobs use negative offsets and would get clipped
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      <div
        ref={blob1}
        style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'rgba(37, 99, 235, 0.35)',
          filter: 'blur(100px)',
          top: '-180px',
          right: '-100px',
          willChange: 'transform',
        }}
      />
      <div
        ref={blob2}
        style={{
          position: 'absolute',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'rgba(79, 70, 229, 0.3)',
          filter: 'blur(80px)',
          bottom: '-140px',
          left: '-100px',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
