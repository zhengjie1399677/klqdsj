import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const towns = [
  { name: '茫汗苏木', x: 230, y: 140 },
  { name: '额勒顺镇', x: 340, y: 190 },
  { name: '库伦旗', x: 340, y: 280, master: true },
  { name: '六家子镇', x: 170, y: 270 },
  { name: '水泉乡', x: 230, y: 400 },
  { name: '白音花镇', x: 310, y: 380 },
  { name: '扣河子镇', x: 150, y: 440 },
  { name: '先进苏木', x: 380, y: 260 },
];

export function KulunMap() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      
      {/* Title above Map */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-blue-900/30 px-6 py-2 rounded-full border border-blue-500/30 backdrop-blur z-10 shadow-[0_0_15px_rgba(30,58,138,0.5)]">
        <MapPin size={18} className="text-cyan-400" />
        <span className="text-lg font-bold text-slate-200 tracking-widest">库伦旗镇分布图</span>
      </div>

      <svg viewBox="0 0 500 500" className="w-[90%] h-[90%] max-w-2xl max-h-2xl drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">
        {/* Outline path - simulating the shape of Kulun Qi */}
        <motion.path
          d="M 280,40 L 320,70 L 340,120 L 390,160 L 400,220 L 450,260 L 420,310 L 380,360 L 390,410 L 340,460 L 260,490 L 200,470 L 150,490 L 100,430 L 140,380 L 110,320 L 150,260 L 120,210 L 160,160 L 220,110 Z"
          fill="rgba(30, 58, 138, 0.15)"
          stroke="#4ade80"
          strokeWidth="1.5"
          className="drop-shadow-[0_0_10px_rgba(74,222,128,0.4)]"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Pattern inside map */}
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(74, 222, 128, 0.05)" strokeWidth="1" />
        </pattern>
        <path
          d="M 280,40 L 320,70 L 340,120 L 390,160 L 400,220 L 450,260 L 420,310 L 380,360 L 390,410 L 340,460 L 260,490 L 200,470 L 150,490 L 100,430 L 140,380 L 110,320 L 150,260 L 120,210 L 160,160 L 220,110 Z"
          fill="url(#grid)"
        />

        {/* Town Markers */}
        {towns.map((town, i) => (
          <g key={i} transform={`translate(${town.x}, ${town.y})`}>
            {/* Multiple nested pulses for emphasis */}
            <motion.circle
              r="20"
              fill="none"
              stroke={town.master ? "#34d399" : "#f87171"}
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.15 }}
            />
            <motion.circle
              r="10"
              fill="none"
              stroke={town.master ? "#10b981" : "#ef4444"}
              strokeWidth="2"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.15 + 0.5 }}
            />
            {/* Inner Dot */}
            <circle r={town.master ? "5" : "4"} fill={town.master ? "#10b981" : "#ef4444"} className="drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
            
            {/* Town Name */}
            <text
              y="-18"
              textAnchor="middle"
              fill="#f1f5f9"
              fontSize="12"
              className="font-medium drop-shadow-md"
            >
              {town.name}
            </text>
          </g>
        ))}
      </svg>
      
      {/* Map Legend */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-2 bg-[#0f172a]/60 backdrop-blur border border-blue-900/50 p-3 rounded text-sm">
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
            <span className="text-slate-300">中心城镇</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ef4444] shadow-[0_0_8px_#ef4444]" />
            <span className="text-slate-300">相关乡镇</span>
         </div>
      </div>
    </div>
  );
}
