import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function CenterTopMetrics() {
  const [metrics, setMetrics] = useState([
    { label: "本年度总产值 (万元)", value: 12450 },
    { label: "平台活跃用户数", value: 3892 },
    { label: "累计处理订单 (单)", value: 85620 },
    { label: "安全运行天数", value: 1245 }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
       setMetrics(m => m.map((item, idx) => {
           if (idx === 3) return item;
           const change = Math.floor(Math.random() * 5);
           return { ...item, value: item.value + change };
       }));
    }, 4000);
    return () => clearInterval(timer);
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
