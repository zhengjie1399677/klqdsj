import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { rawMaterialInventoryStats } from "@/src/data/mockData";

export function RawMaterialStats() {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={rawMaterialInventoryStats}
          layout="vertical"
          margin={{ top: 0, right: 10, left: 10, bottom: -10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" horizontal={false} opacity={0.5} />
          <XAxis type="number" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
          <YAxis dataKey="name" type="category" width={50} stroke="#cbd5e1" fontSize={10} tickLine={false} axisLine={false} />
          <Tooltip
            cursor={{ fill: 'rgba(30, 58, 138, 0.2)' }}
            contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: '#1e3a8a', fontSize: '12px' }}
          />
          <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '5px' }} iconType="rect" />
          <Bar dataKey="inbound" name="入库量" stackId="a" fill="#10b981" />
          <Bar dataKey="outbound" name="出库量" stackId="a" fill="#3b82f6" />
          <Bar dataKey="inventory" name="库存量" fill="#f59e0b" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
