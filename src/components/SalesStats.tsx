import React, { useState, useEffect } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { salesTrend } from "@/src/data/mockData";

const ThreeDVerticalBar = (props: any) => {
  const { fill, x, y, width, height } = props;
  const depth = 6;
  if (!height || height <= 0) return null;

  return (
    <g>
      <path d={`M${x+width},${y} L${x+width+depth},${y-depth} L${x+width+depth},${y+height-depth} L${x+width},${y+height} Z`} fill={fill} />
      <path d={`M${x+width},${y} L${x+width+depth},${y-depth} L${x+width+depth},${y+height-depth} L${x+width},${y+height} Z`} fill="black" opacity={0.3} />
      
      <path d={`M${x},${y} L${x+depth},${y-depth} L${x+width+depth},${y-depth} L${x+width},${y} Z`} fill={fill} />
      <path d={`M${x},${y} L${x+depth},${y-depth} L${x+width+depth},${y-depth} L${x+width},${y} Z`} fill="white" opacity={0.3} />
      
      <rect x={x} y={y} width={width} height={height} fill={fill} />
    </g>
  );
};

export function SalesStats() {
  const [data, setData] = useState(salesTrend);

  useEffect(() => {
    const timer = setInterval(() => {
       setData(prev => prev.map(item => ({
           ...item,
           sales: Math.max(50, item.sales + Math.floor(Math.random() * 20 - 10))
       })));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: -5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" vertical={false} opacity={0.5} />
          <XAxis dataKey="time" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
          <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
          <Tooltip
            cursor={{ fill: 'rgba(30, 58, 138, 0.2)' }}
            contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: '#1e3a8a', borderRadius: '4px', fontSize: '11px', padding: '4px 8px' }}
          />
          <Bar dataKey="sales" fill="#3b82f6" shape={<ThreeDVerticalBar />} name="销售总量" animationDuration={1000} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
