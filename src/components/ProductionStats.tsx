import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { productionStats } from "@/src/data/mockData";

const ThreeDVerticalBar = (props: any) => {
  const { fill, x, y, width, height } = props;
  const depth = 5;
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

export function ProductionStats() {
  const data = [
    { label: "昨日", ...productionStats.yesterday },
    { label: "今日", ...productionStats.today },
    { label: "本月", ...productionStats.thisMonth },
    { label: "上月", ...productionStats.lastMonth },
  ];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 min-h-0 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 10, left: -25, bottom: -5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" vertical={false} opacity={0.5} />
            <XAxis dataKey="label" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} width={45} />
            <Tooltip 
              cursor={{ fill: 'rgba(30, 58, 138, 0.2)' }}
              contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: '#1e3a8a', borderRadius: '4px', fontSize: '11px', padding: '4px 8px' }}
            />
            <Legend wrapperStyle={{ fontSize: '10px', bottom: 0, left: 0 }} iconType="circle" />
            <Bar dataKey="production" name="生产量" fill="#a855f7" shape={<ThreeDVerticalBar />} maxBarSize={20} animationDuration={1000} />
            <Bar dataKey="inbound" name="入库量" fill="#10b981" shape={<ThreeDVerticalBar />} maxBarSize={20} animationDuration={1000} />
            <Bar dataKey="outbound" name="出库量" fill="#f59e0b" shape={<ThreeDVerticalBar />} maxBarSize={20} animationDuration={1000} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
