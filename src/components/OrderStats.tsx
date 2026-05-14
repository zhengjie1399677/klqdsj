import React, { useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { orderStats } from "@/src/data/mockData";

export function OrderStats() {
  const [data, setData] = useState(orderStats);

  useEffect(() => {
    const timer = setInterval(() => {
      setData(prev => ({
        orders: [
          { name: '已生产', value: Math.max(0, prev.orders[0].value + Math.floor(Math.random() * 6 - 3)), fill: '#0ea5e9' },
          { name: '未生产', value: Math.max(0, prev.orders[1].value + Math.floor(Math.random() * 6 - 3)), fill: '#64748b' }
        ],
        dispatch: [
          { name: '已派单', value: Math.max(0, prev.dispatch[0].value + Math.floor(Math.random() * 6 - 3)), fill: '#10b981' },
          { name: '待派单', value: Math.max(0, prev.dispatch[1].value + Math.floor(Math.random() * 6 - 3)), fill: '#f59e0b' }
        ]
      }));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <h4 className="text-[11px] text-slate-400 mb-1">订单生产统计</h4>
        <ResponsiveContainer width="100%" height="80%">
          <PieChart>
            <Pie
              data={data.orders}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={55}
              paddingAngle={5}
              dataKey="value"
              animationDuration={800}
            >
              {data.orders.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: '#1e3a8a', fontSize: '11px', padding: '4px 8px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend verticalAlign="bottom" height={20} iconType="circle" wrapperStyle={{ fontSize: '10px', color: '#94a3b8', bottom: -5 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <h4 className="text-[11px] text-slate-400 mb-1">派单执行统计</h4>
        <ResponsiveContainer width="100%" height="80%">
          <PieChart>
            <Pie
              data={data.dispatch}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={55}
              paddingAngle={5}
              dataKey="value"
              animationDuration={800}
            >
              {data.dispatch.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: '#1e3a8a', fontSize: '11px', padding: '4px 8px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend verticalAlign="bottom" height={20} iconType="circle" wrapperStyle={{ fontSize: '10px', color: '#94a3b8', bottom: -5 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
