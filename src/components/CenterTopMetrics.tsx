import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function CenterTopMetrics() {
  const [metrics, setMetrics] = useState([
    { label: "占地面积 (亩)", value: 90 },
    { label: "育肥牛 (头)", value: 2000 },
    { label: "TMR生产规模 (万吨)", value: 15 },
    { label: "中央厨房生产线 (吨)", value: 500 }
  ]);

  useEffect(() => {
    // 静止数据展示
  }, []);

  return (
    <div className="relative flex w-full justify-between items-center gap-4 h-full px-2">
      {/* Corner Brackets */}
      <div className="absolute -top-2 -left-2 w-4 h-4 border-t-[2px] border-l-[2px] border-cyan-500"></div>
      <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-[2px] border-l-[2px] border-cyan-500"></div>
      <div className="absolute -top-2 -right-2 w-4 h-4 border-t-[2px] border-r-[2px] border-cyan-500"></div>
      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-[2px] border-r-[2px] border-cyan-500"></div>

      {metrics.map((m, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex-1 flex flex-col items-center justify-center bg-transparent border border-[#1e3a5f]/50 rounded text-center h-[90%] gap-4"
        >
          <div className="text-[14px] text-slate-300 font-normal tracking-wide">
            {m.label}
          </div>
          <div className="text-[28px] font-bold text-cyan-300 tracking-wider leading-none">
            {m.value.toLocaleString()}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
