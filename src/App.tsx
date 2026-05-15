import React from "react";
import { Panel } from "@/src/components/ui/Panel";
import { ProductionStats } from "@/src/components/ProductionStats";
import { OrderStats } from "@/src/components/OrderStats";
import { SalesStats } from "@/src/components/SalesStats";
import { RawMaterialStats } from "@/src/components/RawMaterialStats";
import { RawMaterialUsage } from "@/src/components/RawMaterialUsage";
import { ProductionData } from "@/src/components/ProductionData";
import { VehicleCattleStats } from "@/src/components/VehicleCattleStats";
import { CenterTopMetrics } from "@/src/components/CenterTopMetrics";
import { KulunMap } from "@/src/components/KulunMap";

export default function App() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col p-4 gap-4">
      <header className="flex justify-between items-center text-center px-4 flex-shrink-0">
        <div className="flex-1 border-b border-blue-900/50 h-0" />
        <h1 className="text-[35px] font-bold font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 px-8 drop-shadow-md">
          库伦旗现代农牧产业园大数据平台
        </h1>
        <div className="flex-1 border-b border-blue-900/50 h-0" />
      </header>

      <div className="flex flex-1 gap-4 overflow-hidden">
        {/* Left Column (3 panels) */}
        <div className="w-1/4 flex flex-col gap-3 h-full min-h-0">
          <Panel title="生产数据统计" className="flex-1 min-h-0">
            <ProductionData />
          </Panel>
          <Panel title="原材料统计看板" className="flex-1 min-h-0">
            <RawMaterialStats />
          </Panel>
          <Panel title="原材料使用和库存" className="flex-1 min-h-0">
            <RawMaterialUsage />
          </Panel>
        </div>

        {/* Center Column (Top stats + Map + Vehicle Stats) */}
        <div className="w-2/4 flex flex-col gap-3 h-full min-h-0">
          <div className="h-24 flex-shrink-0 relative">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-500/50" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-500/50" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-500/50" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-500/50" />
            <CenterTopMetrics />
          </div>
          
          <div className="flex-1 relative rounded border border-blue-900/30 bg-[#020617]/50 mt-1 overflow-hidden">
             {/* Tech vibes corners */}
             <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-400/50" />
             <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-400/50" />
             <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cyan-400/50" />
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-400/50" />
             
             <KulunMap />
          </div>

          <Panel title="车辆、牛只信息统计" className="h-[240px] flex-shrink-0">
             <VehicleCattleStats />
          </Panel>
        </div>

        {/* Right Column (3 panels) */}
        <div className="w-1/4 flex flex-col gap-3 h-full min-h-0">
          <Panel title="生产统计看板" className="flex-[0.6] min-h-0">
            <ProductionStats />
          </Panel>
          <Panel title="订单量、派单量统计" className="flex-1 min-h-0">
            <OrderStats />
          </Panel>
          <Panel title="销售总量统计" className="flex-1 min-h-0">
            <SalesStats />
          </Panel>
        </div>
      </div>
    </div>
  );
}

