import React, { useState, useEffect, useMemo } from "react";
import { rawMaterialInventoryStats } from "@/src/data/mockData";
import { motion, AnimatePresence } from "motion/react";

const maxVal = Math.max(...rawMaterialInventoryStats.map(item => Math.max(item.inbound + item.outbound, item.inventory))) * 1.1;

const Html3DBar = ({ widthPercent, fill }: { widthPercent: number, fill: string }) => {
    return (
        <div style={{ width: `${widthPercent}%`, backgroundColor: fill }} className="h-full relative shrink-0 shadow-sm">
           {/* Top Face */}
           <div 
             className="absolute bottom-full left-0 w-full h-[3px] origin-bottom-left brightness-[1.3] saturate-150" 
             style={{ backgroundColor: fill, transform: 'skewX(-45deg)' }} 
           />
           {/* Right Face */}
           <div 
             className="absolute left-full bottom-0 w-[3px] h-full origin-bottom-left brightness-[0.7] saturate-150" 
             style={{ backgroundColor: fill, transform: 'skewY(-45deg)' }} 
           />
        </div>
    );
};

export function RawMaterialStats() {
  const [data, setData] = useState(rawMaterialInventoryStats);

  useEffect(() => {
     // Periodically update inventory to simulate changes
     const updateTimer = setInterval(() => {
        setData(prev => prev.map(item => ({
            ...item,
            inventory: Math.max(10, item.inventory + Math.floor(Math.random() * 100 - 50))
        })));
     }, 4000);
     return () => clearInterval(updateTimer);
  }, []);

  useEffect(() => {
    // Cycle through data - Sliding DOWN effect
    const scrollTimer = setInterval(() => {
      setData((prev) => {
        const next = [...prev];
        const last = next.pop();
        if (last) next.unshift(last);
        return next;
      });
    }, 2500);
    return () => clearInterval(scrollTimer);
  }, []);

  return (
    <div className="w-full h-full min-h-0 relative flex flex-col pb-2 pl-2 pr-4 pt-1">
      {/* Legend */}
      <div className="flex justify-end gap-x-4 text-[10px] text-slate-300 mb-1 pr-2 shrink-0">
        <div className="flex items-center gap-1"><span className="inline-block w-2 h-2 bg-[#10b981] shadow-[1px_1px_0_rgba(255,255,255,0.3)_inset]"></span>入库量</div>
        <div className="flex items-center gap-1"><span className="inline-block w-2 h-2 bg-[#3b82f6] shadow-[1px_1px_0_rgba(255,255,255,0.3)_inset]"></span>出库量</div>
        <div className="flex items-center gap-1"><span className="inline-block w-2 h-2 bg-[#f59e0b] shadow-[1px_1px_0_rgba(255,255,255,0.3)_inset]"></span>库存量</div>
      </div>

      {/* Scrolling List */}
      <div 
        className="flex-1 w-full overflow-hidden flex flex-col relative"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)'
        }}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {data.slice(0, 6).map((item) => (
            <motion.div
              layout
              key={item.name}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 46, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full shrink-0 flex items-center border-b border-blue-900/40 relative"
            >
              <div className="w-full h-full flex items-center pt-2 pb-1 relative z-10">
                  <div className="w-14 text-[11px] text-slate-200 font-medium truncate mr-3 text-right shrink-0">
                    {item.name}
                  </div>
                  <div className="flex-1 h-full flex flex-col justify-center pr-3">
                    {/* Top bar (Inbound + Outbound) */}
                    <div className="flex w-full h-[6px] mb-[8px] relative z-20">
                      {item.inbound > 0 && <Html3DBar widthPercent={(item.inbound / maxVal) * 100} fill="#10b981" />}
                      {item.outbound > 0 && <Html3DBar widthPercent={(item.outbound / maxVal) * 100} fill="#3b82f6" />}
                    </div>
                    {/* Bottom bar (Inventory) */}
                    <div className="flex w-full h-[6px] relative z-10">
                      {item.inventory > 0 && <Html3DBar widthPercent={(item.inventory / maxVal) * 100} fill="#f59e0b" />}
                    </div>
                  </div>
                  <div className="w-20 pl-1 shrink-0 flex flex-col justify-center space-y-[2px]">
                    <div className="text-[9px] text-[#10b981] font-mono leading-none flex justify-between"><span className="text-slate-500 scale-90 origin-left border-r border-[#10b981]/30 pr-1 mr-1">入</span>{item.inbound}</div>
                    <div className="text-[9px] text-[#3b82f6] font-mono leading-none flex justify-between"><span className="text-slate-500 scale-90 origin-left border-r border-[#3b82f6]/30 pr-1 mr-1">出</span>{item.outbound}</div>
                    <div className="text-[9px] text-[#f59e0b] font-mono leading-none flex justify-between"><span className="text-slate-500 scale-90 origin-left border-r border-[#f59e0b]/30 pr-1 mr-1">存</span>{item.inventory}</div>
                  </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
