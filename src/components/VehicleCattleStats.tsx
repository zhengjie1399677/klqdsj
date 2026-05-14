import React, { useState, useEffect } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { vehicleCattleStats } from "@/src/data/mockData";
import { Truck, PawPrint } from "lucide-react";

export function VehicleCattleStats() {
  const [data, setData] = useState(vehicleCattleStats.trend);
  const [summary, setSummary] = useState(vehicleCattleStats.summary);

  useEffect(() => {
    const timer = setInterval(() => {
      setData(prev => prev.map(item => ({
        ...item,
        vehicles: Math.max(5, item.vehicles + Math.floor(Math.random() * 6 - 3)),
        cattle: Math.max(10, item.cattle + Math.floor(Math.random() * 10 - 5)),
      })));
      setSummary(prev => ({
         totalVehiclesToday: prev.totalVehiclesToday + Math.floor(Math.random() * 3),
         totalCattleToday: prev.totalCattleToday + Math.floor(Math.random() * 5),
      }));
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col h-full w-full gap-2">
      <div className="flex justify-around items-center bg-blue-900/10 rounded border border-blue-900/30 py-1.5 px-2 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-500/20 rounded-md text-blue-400">
            <Truck size={16} />
          </div>
          <div>
            <div className="text-[10px] text-slate-400">今日入园车辆</div>
            <div className="text-base font-mono text-cyan-300 font-bold">{summary.totalVehiclesToday} <span className="text-[10px] text-slate-500 font-sans font-normal">辆</span></div>
          </div>
        </div>
        <div className="w-px h-6 bg-blue-900/50"></div>
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-amber-500/20 rounded-md text-amber-400">
            <PawPrint size={16} />
          </div>
          <div>
            <div className="text-[10px] text-slate-400">今日入园牛只</div>
            <div className="text-base font-mono text-amber-300 font-bold">{summary.totalCattleToday} <span className="text-[10px] text-slate-500 font-sans font-normal">头</span></div>
          </div>
        </div>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: -25, bottom: -5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" vertical={false} opacity={0.5} />
            <XAxis dataKey="time" stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: '#1e3a8a', fontSize: '11px', padding: '4px 8px' }}
            />
            <Legend wrapperStyle={{ fontSize: '10px', bottom: 0 }} />
            <Line type="monotone" dataKey="vehicles" name="车辆数" stroke="#3b82f6" strokeWidth={2} dot={{ r: 2 }} animationDuration={800} />
            <Line type="monotone" dataKey="cattle" name="牛只数" stroke="#f59e0b" strokeWidth={2} dot={{ r: 2 }} animationDuration={800} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
