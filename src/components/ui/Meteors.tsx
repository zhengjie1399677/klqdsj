import React, { useEffect, useState } from "react";

export const Meteors = ({ number = 30 }: { number?: number }) => {
  const [meteors, setMeteors] = useState<
    { id: string; top: number; left: number; duration: number; delay: number; size: number; length: number }[]
  >([]);

  useEffect(() => {
    // Generate Meteors covering the screen from the top
    const generatedMeteors = new Array(number).fill(true).map((_) => ({
      id: Math.random().toString(36).substring(7),
      top: -10 - Math.random() * 20, // Start above the screen
      left: Math.random() * 120 - 10, // Full width coverage (-10% to 110%)
      duration: Math.random() * 4 + 3, // 3 to 7 seconds
      delay: Math.random() * 5,
      size: Math.random() * 1.5 + 0.5, // 0.5 to 2px height
      length: Math.random() * 80 + 50, // 50 to 130px tail
    }));
    setMeteors(generatedMeteors);
  }, [number]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {meteors.map((m) => (
        <div
          key={m.id}
          className="absolute meteor-animation pointer-events-none flex items-center"
          style={{
            top: `${m.top}%`,
            left: `${m.left}%`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
          }}
        >
          {/* Fading tail */}
          <div 
            className="absolute right-full bg-gradient-to-l from-cyan-300/60 to-transparent rounded-l-full"
            style={{ height: `${m.size}px`, width: `${m.length}px` }}
          />
          {/* Glowing head */}
          <div 
            className="rounded-full bg-white shadow-[0_0_10px_2px_#22d3ee] relative z-10" 
            style={{ width: `${m.size * 2}px`, height: `${m.size * 2}px` }} 
          />
        </div>
      ))}
    </div>
  );
};
