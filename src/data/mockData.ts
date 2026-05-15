// Mock Data for the Dashboard

export const productionStats = {
  today: { production: 63, inbound: 42, outbound: 37 },
  yesterday: { production: 58, inbound: 32, outbound: 47 },
  thisMonth: { production: 336, inbound: 275, outbound: 181 },
  lastMonth: { production: 0, inbound: 0, outbound: 0 },
};

export const rawMaterialInventoryStats = [
  { name: '玉米粒', inbound: 2580, outbound: 1380, inventory: 1200 },
  { name: '喷浆玉米皮', inbound: 1380, outbound: 580, inventory: 800 },
  { name: '棉籽粕', inbound: 650, outbound: 570, inventory: 80 },
  { name: '全株玉米', inbound: 700, outbound: 0, inventory: 700 },
  { name: '菜粕', inbound: 330, outbound: 190, inventory: 140 },
  { name: '棉粕', inbound: 120, outbound: 100, inventory: 20 },
  { name: '棕榈粕', inbound: 240, outbound: 60, inventory: 180 },
  { name: 'DDGS', inbound: 100, outbound: 75, inventory: 25 },
  { name: '豆粕', inbound: 350, outbound: 150, inventory: 200 },
  { name: '板清颗粒', inbound: 480, outbound: 310, inventory: 170 },
  { name: '稻草', inbound: 360, outbound: 270, inventory: 90 },
  { name: '盐砖（块）', inbound: 200, outbound: 184, inventory: 16 },
  { name: '麦秸', inbound: 3550, outbound: 3340, inventory: 210 },
  { name: '玉米秸秆', inbound: 2800, outbound: 2670, inventory: 130 },
  { name: '燕麦草', inbound: 390, outbound: 320, inventory: 70 },
  { name: '青干草', inbound: 240, outbound: 40, inventory: 200 },
  { name: '苏打', inbound: 50, outbound: 42, inventory: 8 },
  { name: '全混合精料', inbound: 650, outbound: 340, inventory: 310 },
  { name: '酵母', inbound: 100, outbound: 82, inventory: 18 },
  { name: '全棉籽', inbound: 350, outbound: 180, inventory: 170 },
];

export const rawMaterialUsageStats = [
  { time: '一季度', usage: 0, inventory: 0 },
  { time: '二季度', usage: 10883, inventory: 4737 },
  { time: '三季度', usage: 0, inventory: 0 },
  { time: '四季度', usage: 0, inventory: 0 },
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
    { name: '已生成', value: 3, fill: '#0ea5e9' },
    { name: '未生产', value: 1, fill: '#64748b' },
  ],
  dispatch: [
    { name: '已派单', value: 5, fill: '#10b981' },
    { name: '待派单', value: 2, fill: '#f59e0b' },
  ],
};

export const salesTrend = [
  { time: '当日销售', sales: 42 },
  { time: '本周累计', sales: 117 },
  { time: '本月累计', sales: 173 },
  { time: '本季度累计', sales: 173 },
  { time: '本年累计', sales: 173 },
];

export const inventoryAlerts = [
  { id: 1, type: 'warning', item: '大豆', message: '库存低于预警线 (20%)', time: '10:23' },
  { id: 2, type: 'critical', item: '豆粕', message: '库存严重不足，即将停产', time: '09:15' },
  { id: 3, type: 'info', item: '玉米秸秆', message: '新批次已入库，库存充足', time: '昨天 16:30' },
  { id: 4, type: 'warning', item: '添加剂A', message: '存储温度异常波动', time: '昨天 12:10' },
  { id: 5, type: 'warning', item: '玉米', message: '近期消耗加快，建议补货', time: '2天前' },
];

export const vehicleCattleTrend = [
  { time: '第一周', vehicles: 8, cattle: 20 },
  { time: '第二周', vehicles: 12, cattle: 35 },
  { time: '第三周', vehicles: 6, cattle: 18 },
  { time: '第四周', vehicles: 11, cattle: 26 },
  { time: '第五周', vehicles: 7, cattle: 22 },
  { time: '第六周', vehicles: 9, cattle: 28 },
  { time: '第七周', vehicles: 13, cattle: 30 },
  { time: '第八周', vehicles: 10, cattle: 19 },
];
