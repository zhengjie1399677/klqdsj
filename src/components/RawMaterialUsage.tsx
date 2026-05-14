import React, { useState, useEffect } from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { rawMaterialUsageStats } from "@/src/data/mockData";

export function RawMaterialUsage() {
  const [data, setData] = useState(rawMaterialUsageStats);

  useEffect(() => {
     const timer = setInterval(() => {
        setData(prev => prev.map(item => ({
            ...item,
            usage: Math.max(1000, item.usage + Math.floor(Math.random() * 400 - 200)),
            inventory: Math.max(1000, item.inventory + Math.floor(Math.random() * 300 - 150)),
        })));
     }, 4500);
     return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: -5 }}>
          <defs>
            <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorInv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" vertical={false} opacity={0.5} />
          <XAxis dataKey="time" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
          <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: '#1e3a8a', fontSize: '11px', padding: '4px 8px' }}
          />
          <Legend wrapperStyle={{ fontSize: '10px', bottom: -5 }} />
          <Area type="monotone" dataKey="usage" name="使用量" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorUsage)" animationDuration={1000} />
          <Area type="monotone" dataKey="inventory" name="库存量" stroke="#10b981" fillOpacity={1} fill="url(#colorInv)" animationDuration={1000} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
