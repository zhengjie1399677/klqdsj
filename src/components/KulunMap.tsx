import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin } from 'lucide-react';
import * as d3 from 'd3';
import kulunGeo from '../data/kulunGeo.json';

const geoCoordMap: Record<string, [number, number]> = {
    '库伦街道办事处': [121.772594, 42.730386],
    '库伦镇': [121.773722, 42.735043],
    '扣河子镇': [121.259895, 42.467594],
    '白音花镇': [121.605374, 42.565808],
    '六家子镇': [121.240000, 42.730000],
    '额勒顺镇': [121.633263, 42.991042],
    '茫汗苏木': [121.394255, 42.997850],
    '先进苏木': [121.759330, 42.766444],
    '水泉乡': [121.390000, 42.578600]
};

const townData = [
    { name: '库伦街道办事处', value: [150, '常住人口约35011人\n城镇化核心行政区。\n库伦旗政治经济与商贸文化中心，商贸物流与文旅服务业发达。'] },
    { name: '库伦镇', value: [150, '常住人口约35604人\n行政区域总面积1240平方千米。\n中国知名荞麦之乡，主产高产玉米、荞麦与杂粮杂豆。'] },
    { name: '扣河子镇', value: [150, '常住人口约36356人\n行政区域总面积406.97平方千米。\n地处三县交汇，以荞麦、旱作杂粮及绿色畜牧养殖为主。'] },
    { name: '白音花镇', value: [150, '常住人口约21691人\n行政区域总面积343.99平方千米。\n南部交通要道，属于浅山传统农牧交错经济类型区。'] },
    { name: '六家子镇', value: [150, '常住人口约17887人\n行政区域总面积420.79平方千米。\n西北部重要农业产区，主攻优质杂粮与特色高效设施农业。'] },
    { name: '额勒顺镇', value: [150, '常住人口约10346人\n行政区域总面积987.5平方千米。\n北部沙区边境镇，主导塔敏查干沙地生态治理与沙生特色农牧业。'] },
    { name: '茫汗苏木', value: [150, '常住人口约10125人\n行政区域总面积764.18平方千米。\n西北部牧业苏木，地处科尔沁沙地腹地，以传统蒙古族纯畜牧业为主。'] },
    { name: '先进苏木', value: [150, '常住人口约10934人\n南部边境恢复建制苏木。\n典型的传统农牧结合区，核心发展肉牛养殖与优质饲草料种植。'] },
    { name: '水泉乡', value: [150, '常住人口约10180人\n行政区域总面积300平方千米。\n东南部黄土丘陵沟壑区，盛产红干椒、锦绣海棠，主打小流域林下经济。'] }
];

export function KulunMap() {
  const [geoData, setGeoData] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Clone and fix winding order if necessary
    const parsedGeoData = JSON.parse(JSON.stringify(kulunGeo));
    if (d3.geoArea(parsedGeoData) > 2 * Math.PI) {
      if (parsedGeoData.features) {
        parsedGeoData.features.forEach((f: any) => {
          if (f.geometry.type === 'MultiPolygon') {
            f.geometry.coordinates.forEach((polygon: any) => {
              polygon.forEach((ring: any) => ring.reverse());
            });
          } else if (f.geometry.type === 'Polygon') {
            f.geometry.coordinates.forEach((ring: any) => ring.reverse());
          }
        });
      }
    }
    setGeoData(parsedGeoData);
  }, []);

  useEffect(() => {
    if (!geoData) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % townData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [geoData]);

  const activeTown = townData[activeIndex];

  const projection = d3.geoMercator();
  let pathGenerator: d3.GeoPath<any, d3.GeoPermissibleObjects> | null = null;
  
  if (geoData) {
    projection.fitSize([500, 500], geoData);
    pathGenerator = d3.geoPath().projection(projection);
  }

  return (
    <div className="w-full h-full relative flex items-center justify-center p-4">
      {/* Title above Map */}
      <div className="absolute top-4 left-4 flex items-center gap-2 bg-blue-900/30 px-6 py-2 rounded-full border border-blue-500/30 backdrop-blur z-10 shadow-[0_0_15px_rgba(30,58,138,0.5)]">
        <MapPin size={18} className="text-cyan-400" />
        <span className="text-lg font-bold text-slate-200 tracking-widest">库伦旗分布图</span>
      </div>

      <div className="w-full h-full flex items-center justify-center relative">
          <svg viewBox="0 0 500 500" className="w-[80%] h-[100%] max-w-[500px] max-h-[500px] drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            {/* Pattern inside map map */}
            <pattern id="gridPattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(74, 222, 128, 0.1)" strokeWidth="0.5" />
            </pattern>
            {geoData && geoData.features && geoData.features.map((feature: any, idx: number) => {
              const d = pathGenerator ? pathGenerator(feature) : "";
              return (
                <g key={idx}>
                  <path
                    d={d || ""}
                    fill="url(#gridPattern)"
                  />
                  <path
                    d={d || ""}
                    fill="rgba(30, 58, 138, 0.25)"
                    stroke="#4ade80"
                    strokeWidth="1.5"
                    className="drop-shadow-[0_0_8px_rgba(74,222,128,0.3)] transition-all duration-300"
                  />
                </g>
              );
            })}

            {/* Town Markers */}
            {geoData && townData.map((town, i) => {
              const coords = geoCoordMap[town.name];
              if (!coords) return null;
              
              const projected = projection(coords);
              if (!projected) return null;
              
              const [x, y] = projected;
              const isActive = i === activeIndex;

              return (
                <g key={i} transform={`translate(${x}, ${y})`}>
                  {isActive && (
                      <>
                        <motion.circle
                          r="25"
                          fill="none"
                          stroke="#34d399"
                          strokeWidth="1.5"
                          initial={{ scale: 0, opacity: 0.8 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <motion.circle
                          r="15"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2"
                          initial={{ scale: 0, opacity: 1 }}
                          animate={{ scale: 1.2, opacity: 0 }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                        />
                      </>
                  )}
                  {/* Inner Dot */}
                  <circle r={isActive ? "6" : "4"} fill={isActive ? "#10b981" : "#3b82f6"} className={isActive ? "drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" : ""} />
                  
                  {/* Town Name */}
                  <text
                    y="-15"
                    textAnchor="middle"
                    fill={isActive ? "#fff" : "#cbd5e1"}
                    fontSize={isActive ? "14" : "12"}
                    fontWeight={isActive ? "bold" : "normal"}
                    className="drop-shadow-md transition-all duration-300 pointer-events-none"
                  >
                    {town.name}
                  </text>
                </g>
              );
            })}
          </svg>
      </div>

      {/* Info Card */}
      <AnimatePresence mode="wait">
        {activeTown && (
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-4 right-4 w-52 bg-blue-900/10 backdrop-blur-sm border border-cyan-500/30 p-3 rounded text-sm shadow-none pointer-events-none"
          >
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400" />

            <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <h4 className="text-cyan-300 font-bold text-sm tracking-widest">{activeTown.name}</h4>
            </div>
            
            <div className="space-y-1 text-slate-200 font-normal">
                {activeTown.value[1].toString().split('\n').map((line, idx) => (
                    <p key={idx} className="leading-relaxed text-[11px]">{line}</p>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


