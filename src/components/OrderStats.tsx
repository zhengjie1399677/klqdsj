import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { orderStats } from "@/src/data/mockData";

export function OrderStats() {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <h4 className="text-xs text-slate-400 mb-1">订单生产统计</h4>
        <ResponsiveContainer width="100%" height="80%">
          <PieChart>
            <Pie
              data={orderStats.orders}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              paddingAngle={5}
              dataKey="value"
            >
              {orderStats.orders.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: '#1e3a8a', fontSize: '12px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend verticalAlign="bottom" height={20} iconType="circle" wrapperStyle={{ fontSize: '11px', color: '#94a3b8' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <h4 className="text-xs text-slate-400 mb-1">派单执行统计</h4>
        <ResponsiveContainer width="100%" height="80%">
          <PieChart>
            <Pie
              data={orderStats.dispatch}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              paddingAngle={5}
              dataKey="value"
            >
              {orderStats.dispatch.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: '#1e3a8a', fontSize: '12px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend verticalAlign="bottom" height={20} iconType="circle" wrapperStyle={{ fontSize: '11px', color: '#94a3b8' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
