// Mock Data for the Dashboard

export const productionStats = {
  today: { production: 120, inbound: 110, outbound: 85 },
  yesterday: { production: 115, inbound: 105, outbound: 90 },
  thisMonth: { production: 3600, inbound: 3500, outbound: 3200 },
  lastMonth: { production: 3400, inbound: 3300, outbound: 3100 },
};

export const rawMaterialInventoryStats = [
  { name: '玉米', inbound: 4000, outbound: 3800, inventory: 1200 },
  { name: '大豆', inbound: 3000, outbound: 2800, inventory: 800 },
  { name: '豆粕', inbound: 2000, outbound: 1900, inventory: 500 },
  { name: '玉米秸秆', inbound: 5000, outbound: 4500, inventory: 2000 },
  { name: '添加剂', inbound: 500, outbound: 400, inventory: 150 },
];

export const rawMaterialUsageStats = [
  { time: '第一季', usage: 12000, inventory: 5000 },
  { time: '第二季', usage: 14000, inventory: 4500 },
  { time: '第三季', usage: 13500, inventory: 4800 },
  { time: '第四季', usage: 15000, inventory: 4650 },
];

export const productionDataTrend = [
  { time: '1月', value: 1100 },
  { time: '2月', value: 1250 },
  { time: '3月', value: 1150 },
  { time: '4月', value: 1400 },
  { time: '5月', value: 1300 },
  { time: '6月', value: 1500 },
];

export const orderStats = {
  orders: [
    { name: '已生产', value: 65, fill: '#0ea5e9' },
    { name: '未生产', value: 35, fill: '#64748b' },
  ],
  dispatch: [
    { name: '已派单', value: 80, fill: '#10b981' },
    { name: '待派单', value: 20, fill: '#f59e0b' },
  ],
};

export const salesTrend = [
  { time: '周一', sales: 120 },
  { time: '周二', sales: 135 },
  { time: '周三', sales: 125 },
  { time: '周四', sales: 150 },
  { time: '周五', sales: 170 },
  { time: '周六', sales: 210 },
  { time: '周日', sales: 190 },
];

export const inventoryAlerts = [
  { id: 1, type: 'warning', item: '大豆', message: '库存低于预警线 (20%)', time: '10:23' },
  { id: 2, type: 'critical', item: '豆粕', message: '库存严重不足，即将停产', time: '09:15' },
  { id: 3, type: 'info', item: '玉米秸秆', message: '新批次已入库，库存充足', time: '昨天 16:30' },
  { id: 4, type: 'warning', item: '添加剂A', message: '存储温度异常波动', time: '昨天 12:10' },
  { id: 5, type: 'warning', item: '玉米', message: '近期消耗加快，建议补货', time: '2天前' },
];

export const vehicleCattleStats = {
  summary: {
    totalVehiclesToday: 128,
    totalCattleToday: 450,
  },
  trend: [
    { time: '08:00', vehicles: 12, cattle: 40 },
    { time: '10:00', vehicles: 25, cattle: 80 },
    { time: '12:00', vehicles: 15, cattle: 20 },
    { time: '14:00', vehicles: 30, cattle: 120 },
    { time: '16:00', vehicles: 28, cattle: 150 },
    { time: '18:00', vehicles: 18, cattle: 40 },
  ]
};
