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
  { name: '稻草', inbound: 3200, outbound: 3000, inventory: 1100 },
  { name: '麦麸', inbound: 1500, outbound: 1400, inventory: 450 },
  { name: '高粱', inbound: 2800, outbound: 2600, inventory: 900 },
  { name: '棉籽粕', inbound: 1200, outbound: 1100, inventory: 300 },
  { name: '菜籽粕', inbound: 1800, outbound: 1700, inventory: 600 },
  { name: '花生粕', inbound: 900, outbound: 800, inventory: 200 },
  { name: '苜蓿草', inbound: 4500, outbound: 4200, inventory: 1800 },
  { name: '燕麦干草', inbound: 3600, outbound: 3400, inventory: 1300 },
  { name: '氨基酸', inbound: 200, outbound: 180, inventory: 50 },
  { name: '维生素', inbound: 150, outbound: 140, inventory: 40 },
  { name: '骨粉', inbound: 800, outbound: 750, inventory: 150 },
  { name: '鱼粉', inbound: 600, outbound: 550, inventory: 100 },
  { name: '石粉', inbound: 400, outbound: 380, inventory: 120 },
  { name: '食盐', inbound: 300, outbound: 280, inventory: 80 },
  { name: '酵母粉', inbound: 250, outbound: 230, inventory: 90 },
  { name: '预混料', inbound: 1100, outbound: 1000, inventory: 400 },
  { name: '青贮饲料', inbound: 8000, outbound: 7500, inventory: 3500 },
  { name: '葵花籽粕', inbound: 1300, outbound: 1200, inventory: 350 },
  { name: 'DDGS', inbound: 2400, outbound: 2200, inventory: 850 },
  { name: '甜菜粕', inbound: 1700, outbound: 1600, inventory: 550 },
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
