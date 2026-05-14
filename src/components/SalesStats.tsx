import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { salesTrend } from "@/src/data/mockData";

export function SalesStats() {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={salesTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" vertical={false} opacity={0.5} />
          <XAxis dataKey="time" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
          <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
          <Tooltip
            cursor={{ fill: 'rgba(30, 58, 138, 0.2)' }}
            contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: '#1e3a8a', borderRadius: '4px', fontSize: '12px' }}
          />
          <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} name="销售总量">
            {/* Can add cell-based color logic here if needed */}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
