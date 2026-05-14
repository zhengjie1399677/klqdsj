import React, { useState } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { productionStats } from "@/src/data/mockData";

export function ProductionStats() {
  const [view, setView] = useState<'day' | 'month'>('day');

  const dataDay = [
    { label: "今日", ...productionStats.today },
    { label: "昨日", ...productionStats.yesterday },
  ];

  const dataMonth = [
    { label: "本月", ...productionStats.thisMonth },
    { label: "上月", ...productionStats.lastMonth },
  ];

  const data = view === 'day' ? dataDay : dataMonth;

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-end mb-1 gap-1 flex-shrink-0">
        <button 
          onClick={() => setView('day')} 
          className={`text-[10px] px-2 py-0.5 rounded cursor-pointer ${view === 'day' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50' : 'text-slate-400 border border-transparent hover:bg-white/5'}`}
        >
          日
        </button>
        <button 
          onClick={() => setView('month')} 
          className={`text-[10px] px-2 py-0.5 rounded cursor-pointer ${view === 'month' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50' : 'text-slate-400 border border-transparent hover:bg-white/5'}`}
        >
          月
        </button>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -25, bottom: -5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" vertical={false} opacity={0.5} />
            <XAxis dataKey="label" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} width={45} />
            <Tooltip 
              cursor={{ fill: 'rgba(30, 58, 138, 0.2)' }}
              contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: '#1e3a8a', borderRadius: '4px', fontSize: '11px', padding: '4px 8px' }}
            />
            <Legend wrapperStyle={{ fontSize: '10px', bottom: 0, left: 0 }} iconType="circle" />
            <Bar dataKey="production" name="生产量" fill="#a855f7" radius={[2, 2, 0, 0]} maxBarSize={20} />
            <Bar dataKey="inbound" name="入库量" fill="#10b981" radius={[2, 2, 0, 0]} maxBarSize={20} />
            <Bar dataKey="outbound" name="出库量" fill="#f59e0b" radius={[2, 2, 0, 0]} maxBarSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
