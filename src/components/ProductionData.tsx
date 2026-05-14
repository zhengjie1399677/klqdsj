import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

function LiquidGauge({ percent, displayValue, label, size = 70, unit = "", colorType = "blue" }: { percent: number, displayValue: number, label: string, size?: number, unit?: string, colorType?: "blue" | "purple" }) {
  const [currentPercent, setCurrentPercent] = useState(0);
  const [currentVal, setCurrentVal] = useState(0);

  useEffect(() => {
    let p = currentPercent;
    let v = currentVal;
    let frame: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      if (time - lastTime >= 20) {
        lastTime = time;
        let changed = false;
        
        if (p < percent) { p += 1; changed = true; }
        else if (p > percent) { p -= 1; changed = true; }
        
        const step = Math.max(1, Math.floor(Math.abs(displayValue - v) / 10));
        if (v < displayValue) { v += step; if(v > displayValue) v = displayValue; changed = true; }
        else if (v > displayValue) { v -= step; if(v < displayValue) v = displayValue; changed = true; }
        
        if (changed) {
          setCurrentPercent(p);
          setCurrentVal(v);
        }
      }
      
      if (p !== percent || v !== displayValue) {
         frame = requestAnimationFrame(animate);
      }
    };
    
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [percent, displayValue]);

  const topOffset = size * (100 - currentPercent) / 100;
  const waveSize = size * 2.5;

  const getGradient = () => {
     if (colorType === 'purple') {
        return (
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-purple-600/50 rounded-[43%] text-transparent animate-[spin_4s_linear_infinite]" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-purple-500 to-fuchsia-400 rounded-[40%] text-transparent animate-[spin_6s_linear_infinite]" />
          </>
        )
     }
     return (
       <>
         <div className="absolute top-0 left-0 w-full h-full bg-blue-600/50 rounded-[43%] text-transparent animate-[spin_4s_linear_infinite]" />
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-[40%] text-transparent animate-[spin_6s_linear_infinite]" />
       </>
     )
  }

  return (
    <div className="flex flex-col items-center gap-1.5 justify-center">
      <div 
        className="relative rounded-full border-2 border-slate-600/50 overflow-hidden bg-[#020617] flex items-center justify-center shadow-[inset_0_3px_6px_rgba(0,0,0,0.6)]"
        style={{ width: size, height: size }}
      >
        <div 
          className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-out"
          style={{ top: `${topOffset}px`, width: waveSize, height: waveSize }}
        >
          {getGradient()}
        </div>

        <span className="relative z-10 text-white font-mono font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,1)] flex items-baseline gap-0.5" style={{ fontSize: size * 0.22 }}>
            {currentVal}
            {unit && <span className="text-slate-200 font-sans" style={{ fontSize: size * 0.11 }}>{unit}</span>}
        </span>
      </div>
      <div className="text-slate-300 font-medium" style={{ fontSize: Math.max(10, size * 0.12) }}>{label}</div>
    </div>
  );
}

export function ProductionData() {
  const [stats, setStats] = useState({
    today: { value: 1250, target: 2200 },
    yesterday: { value: 1420, target: 2800 },
    thisMonth: { value: 28500, target: 45000 },
    lastMonth: { value: 42000, target: 80000 },
  });

  useEffect(() => {
    const timer = setInterval(() => {
       setStats(prev => ({
           ...prev,
           today: { ...prev.today, value: prev.today.value + Math.floor(Math.random() * 20) },
           thisMonth: { ...prev.thisMonth, value: prev.thisMonth.value + Math.floor(Math.random() * 20) }
       }));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center gap-2 pb-2">
      <motion.div 
        className="flex items-center justify-end pr-2 pl-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <LiquidGauge 
          label="今日生产" 
          displayValue={stats.today.value} 
          percent={Math.min(100, Math.floor(stats.today.value / stats.today.target * 100))} 
          size={180} 
          unit="件"
          colorType="purple"
        />
      </motion.div>

      <div className="flex flex-col justify-center items-start h-full py-4 gap-4 pr-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.2 }}
        >
          <LiquidGauge 
            label="昨日" 
            displayValue={stats.yesterday.value} 
            percent={Math.min(100, Math.floor(stats.yesterday.value / stats.yesterday.target * 100))} 
            size={60} 
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.3 }}
        >
          <LiquidGauge 
            label="本月累计" 
            displayValue={stats.thisMonth.value} 
            percent={Math.min(100, Math.floor(stats.thisMonth.value / stats.thisMonth.target * 100))} 
            size={60} 
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.4 }}
        >
          <LiquidGauge 
            label="上月累计" 
            displayValue={stats.lastMonth.value} 
            percent={Math.min(100, Math.floor(stats.lastMonth.value / stats.lastMonth.target * 100))} 
            size={60} 
          />
        </motion.div>
      </div>
    </div>
  );
}
