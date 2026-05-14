import React, { useState, useEffect } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { rawMaterialInventoryStats } from "@/src/data/mockData";

const ThreeDHorizontalBar = (props: any) => {
  const { fill, x, y, width, height } = props;
  const depth = 4;
  if (!width || width <= 0) return null;

  return (
    <g>
      <path d={`M${x},${y} L${x+depth},${y-depth} L${x+width+depth},${y-depth} L${x+width},${y} Z`} fill={fill} />
      <path d={`M${x},${y} L${x+depth},${y-depth} L${x+width+depth},${y-depth} L${x+width},${y} Z`} fill="white" opacity={0.3} />
      
      <path d={`M${x+width},${y} L${x+width+depth},${y-depth} L${x+width+depth},${y+height-depth} L${x+width},${y+height} Z`} fill={fill} />
      <path d={`M${x+width},${y} L${x+width+depth},${y-depth} L${x+width+depth},${y+height-depth} L${x+width},${y+height} Z`} fill="black" opacity={0.3} />

      <rect x={x} y={y} width={width} height={height} fill={fill} />
    </g>
  );
};

export function RawMaterialStats() {
  const [data, setData] = useState(rawMaterialInventoryStats);

  useEffect(() => {
     const timer = setInterval(() => {
        setData(prev => prev.map(item => ({
            ...item,
            inventory: Math.max(10, item.inventory + Math.floor(Math.random() * 100 - 50))
        })));
     }, 4000);
     return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 15, left: 10, bottom: -10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" horizontal={false} opacity={0.5} />
          <XAxis type="number" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
          <YAxis dataKey="name" type="category" width={40} stroke="#cbd5e1" fontSize={10} tickLine={false} axisLine={false} />
          <Tooltip
            cursor={{ fill: 'rgba(30, 58, 138, 0.2)' }}
            contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: '#1e3a8a', fontSize: '11px', padding: '4px 8px' }}
          />
          <Legend wrapperStyle={{ fontSize: '10px', paddingTop: '5px' }} iconType="rect" />
          <Bar dataKey="inbound" name="入库量" stackId="a" fill="#10b981" shape={<ThreeDHorizontalBar />} animationDuration={800} />
          <Bar dataKey="outbound" name="出库量" stackId="a" fill="#3b82f6" shape={<ThreeDHorizontalBar />} animationDuration={800} />
          <Bar dataKey="inventory" name="库存量" fill="#f59e0b" shape={<ThreeDHorizontalBar />} animationDuration={800} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
