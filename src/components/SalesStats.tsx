import React from "react";
import { salesTrend } from "@/src/data/mockData";
import { motion } from "motion/react";

export function SalesStats() {
  const maxSales = Math.max(...salesTrend.map(d => d.sales));
  
  // Use original array so 当日 (Today) is at the top
  const displayData = [...salesTrend];

  return (
    <div className="w-full h-full flex flex-col justify-between px-3 py-2 min-h-0">
      <div className="flex-1 flex flex-col justify-center gap-4">
        {displayData.map((item, index) => {
          const percent = maxSales > 0 ? (item.sales / maxSales) * 100 : 0;
          return (
            <div key={item.time} className="w-full flex flex-col justify-center relative group">
              <div className="flex justify-between items-end mb-1.5 custom-font relative z-10">
                <span className="text-[11px] text-slate-300 font-medium">{item.time}</span>
                <span className="text-[13px] font-mono font-bold text-cyan-300 drop-shadow-[0_0_2px_rgba(34,211,238,0.5)]">
                  {item.sales} <span className="text-[10px] text-slate-500 font-sans font-normal ml-0.5">吨</span>
                </span>
              </div>
              <div className="h-3 w-full bg-blue-950/40 rounded-sm overflow-hidden border border-blue-900/40 relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                  transition={{ duration: 1.5, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-sm relative"
                  style={{
                    background: `linear-gradient(90deg, rgba(8, 145, 178, 0.3) 0%, rgba(34, 211, 238, 0.8) 100%)`,
                    boxShadow: '0 0 10px rgba(34, 211, 238, 0.4)'
                  }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/80 shadow-[0_0_5px_#fff]" />
                </motion.div>
                
                {/* Background dashed markings for tech feel */}
                <div 
                   className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
                   style={{
                     backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #fff 2px, #fff 4px)'
                   }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
