import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { vehicleCattleTrend } from "@/src/data/mockData";
import { Truck, PawPrint } from "lucide-react";

export function VehicleCattleStats() {
  return (
    <div className="flex flex-col h-full w-full gap-2 px-1 pb-1">
      <div className="flex justify-around items-center border border-blue-900/40 rounded-lg py-2.5 px-4 shadow-[0_4px_12px_rgba(0,0,0,0.2)] bg-blue-950/20 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[#0f2942]/60 rounded-[10px] text-cyan-400 shadow-inner">
            <Truck size={18} />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-[11px] text-slate-400 mb-0.5">累计入园车辆</div>
            <div className="text-[22px] font-mono text-cyan-400 font-bold leading-none">
              76 <span className="text-[10px] text-slate-500 font-sans font-normal ml-0.5">辆</span>
            </div>
          </div>
        </div>
        <div className="w-px h-8 bg-blue-800/50"></div>
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[#2a2118]/60 rounded-[10px] text-amber-500 shadow-inner">
            <PawPrint size={18} />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-[11px] text-slate-400 mb-0.5">累计入园牛只</div>
            <div className="text-[22px] font-mono text-amber-400 font-bold leading-none">
              198 <span className="text-[10px] text-slate-500 font-sans font-normal ml-0.5">头</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 min-h-0 w-full mt-2 flex gap-4">
        <div className="flex-1 min-w-0 flex flex-col">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={vehicleCattleTrend} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
              <CartesianGrid strokeDasharray="2 4" stroke="#1e3a8a" vertical={false} opacity={0.4} />
              <XAxis dataKey="time" stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} interval="preserveStartEnd" />
              <YAxis stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: 'none', fontSize: '11px', padding: '4px 8px', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}
              />
              <Line type="monotone" dataKey="vehicles" name="车辆数" stroke="#3b82f6" strokeWidth={2} dot={{ r: 2, fill: '#3b82f6', strokeWidth: 0 }} animationDuration={1000} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="w-px h-full bg-blue-800/40"></div>
        <div className="flex-1 min-w-0 flex flex-col">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={vehicleCattleTrend} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
              <CartesianGrid strokeDasharray="2 4" stroke="#1e3a8a" vertical={false} opacity={0.4} />
              <XAxis dataKey="time" stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} interval="preserveStartEnd" />
              <YAxis stroke="#64748b" fontSize={9} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: 'none', fontSize: '11px', padding: '4px 8px', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}
              />
              <Line type="monotone" dataKey="cattle" name="牛只数" stroke="#f59e0b" strokeWidth={2} dot={{ r: 2, fill: '#f59e0b', strokeWidth: 0 }} animationDuration={1000} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
