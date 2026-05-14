import React from 'react';
import { motion } from 'motion/react';

export function CenterTopMetrics() {
  const metrics = [
    { label: "本年度总产值 (万元)", value: "12,450" },
    { label: "平台活跃用户数", value: "3,892" },
    { label: "累计处理订单 (单)", value: "85,620" },
    { label: "安全运行天数", value: "1,245" }
  ];

  return (
    <div className="flex w-full justify-between items-center px-4 py-2 gap-4 h-full">
      {metrics.map((m, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex flex-col items-center justify-center flex-1 bg-blue-900/10 border border-blue-900/30 rounded p-3 relative overflow-hidden"
        >
          <div className="absolute -right-4 -top-4 w-12 h-12 bg-blue-500/10 rounded-full blur-xl" />
          <div className="text-xs text-slate-400 mb-1">{m.label}</div>
          <div className="text-2xl font-mono text-cyan-300 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">{m.value}</div>
        </motion.div>
      ))}
    </div>
  );
}
