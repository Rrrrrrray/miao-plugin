import lodash from 'lodash'

// 元素反应类型及基数
export const erType = {
  // 增幅反应
  vaporize: { type: 'pct', num: ({ element }) => element === '水' ? 2 : 1.5, title: '蒸发' },
  melt: { type: 'pct', num: ({ element }) => element === '火' ? 2 : 1.5, title: '融化' },
  // 结晶护盾
  crystallize: { type: 'shield', num: () => 1, title: '结晶' },
  // 剧变反应
  burning: { type: 'fusion', num: () => 1, title: '燃烧' },
  superConduct: { type: 'fusion', num: () => 6, title: '超导' },
  swirl: { type: 'fusion', num: () => 2.4, title: '扩散' },
  electroCharged: { type: 'fusion', num: () => 8, title: '感电' },
  shatter: { type: 'fusion', num: () => 12, title: '碎冰' },
  overloaded: { type: 'fusion', num: () => 11, title: '超载' },
  bloom: { type: 'fusion', num: () => 8, title: '绽放' },
  burgeon: { type: 'fusion', num: () => 12, title: '烈绽放' },
  hyperBloom: { type: 'fusion', num: () => 12, title: '超绽放' },
  // 激化反应
  aggravate: { type: 'bonus', num: () => 4.6, title: '超激化' },
  spread: { type: 'bonus', num: () => 5.0, title: '蔓激化' },
  // 月反应
  lunarBloom: { type: 'lunar', num: () => 8, title: '月绽放' },
  lunarCharged: { type: 'lunar', num: () => 7.2, title: '月感电' },
  // 击破持续伤害
  shock: { type: 'breakDot', num: () => 2.0, title: '触电' },
  burn: { type: 'breakDot', num: () => 1.0, title: '灼烧' },
  windShear: { type: 'breakDot', num: () => 1.0, title: '风化' },
  bleed: { type: 'breakDot', num: () => 1.0, title: '裂伤' },
  // 击破附加伤害
  entanglement: { type: 'breakPlus', num: () => 0.6, title: '纠缠' },
  // 击破伤害
  ligntningBreak: { type: 'break', num: () => 1.0, title: '雷击破' },
  fireBreak: { type: 'break', num: () => 2.0, title: '火击破' },
  windBreak: { type: 'break', num: () => 1.5, title: '风击破' },
  physicalBreak: { type: 'break', num: () => 2.0, title: '物理击破' },
  quantumBreak: { type: 'break', num: () => 0.5, title: '量子击破' },
  imaginaryBreak: { type: 'break', num: () => 0.5, title: '虚数击破' },
  iceBreak: { type: 'break', num: () => 1.0, title: '冰击破' },
  // 超击破伤害
  superBreak: { type: 'break', num: () => 1.0, title: '超击破' }
}
let erTmp = {}
lodash.forEach(erType, (er, key) => {
  erTmp[er.title] = key
})
export const erTitle = erTmp

// 各等级精通基础伤害
export const eleBaseDmg = {
  1: 4.291,
  2: 4.634,
  3: 4.976,
  4: 5.319,
  5: 5.661,
  6: 6.162,
  7: 6.660,
  8: 7.217,
  9: 7.842,
  10: 8.536,
  11: 9.300,
  12: 10.165,
  13: 11.112,
  14: 12.141,
  15: 13.437,
  16: 14.770,
  17: 16.105,
  18: 17.431,
  19: 18.781,
  20: 20.146,
  21: 21.528,
  22: 22.926,
  23: 24.311,
  24: 25.703,
  25: 27.102,
  26: 28.300,
  27: 29.526,
  28: 30.745,
  29: 32.432,
  30: 34.073,
  31: 35.668,
  32: 37.257,
  33: 38.854,
  34: 40.456,
  35: 42.277,
  36: 44.130,
  37: 46.018,
  38: 47.927,
  39: 49.889,
  40: 51.846,
  41: 53.850,
  42: 56.041,
  43: 58.376,
  44: 60.838,
  45: 64.016,
  46: 67.136,
  47: 70.382,
  48: 73.753,
  49: 77.267,
  50: 80.900,
  51: 84.189,
  52: 87.633,
  53: 91.121,
  54: 94.655,
  55: 99.650,
  56: 104.100,
  57: 108.597,
  58: 113.238,
  59: 118.152,
  60: 123.221,
  61: 128.392,
  62: 134.776,
  63: 141.378,
  64: 148.135,
  65: 156.111,
  66: 162.868,
  67: 169.874,
  68: 176.949,
  69: 184.168,
  70: 191.410,
  71: 198.693,
  72: 206.169,
  73: 212.789,
  74: 219.436,
  75: 228.557,
  76: 236.687,
  77: 244.853,
  78: 252.806,
  79: 261.198,
  80: 269.361,
  81: 277.499,
  82: 285.744,
  83: 294.092,
  84: 302.546,
  85: 313.459,
  86: 322.238,
  87: 331.371,
  88: 340.864,
  89: 351.274,
  90: 361.713
}

// 各等级结晶护盾基础吸收量
export const cryBaseDmg = {
  1: 91.18,
  2: 98.71,
  3: 106.24,
  4: 113.76,
  5: 121.29,
  6: 128.82,
  7: 136.35,
  8: 143.88,
  9: 151.41,
  10: 158.94,
  11: 169.99,
  12: 181.08,
  13: 192.19,
  14: 204.05,
  15: 215.94,
  16: 227.86,
  17: 247.69,
  18: 267.54,
  19: 287.43,
  20: 303.83,
  21: 320.23,
  22: 336.63,
  23: 352.32,
  24: 368.01,
  25: 383.70,
  26: 394.43,
  27: 405.18,
  28: 415.95,
  29: 426.74,
  30: 437.54,
  31: 450.60,
  32: 463.70,
  33: 476.85,
  34: 491.13,
  35: 502.55,
  36: 514.01,
  37: 531.41,
  38: 549.98,
  39: 568.58,
  40: 585.00,
  41: 605.67,
  42: 626.39,
  43: 646.05,
  44: 665.76,
  45: 685.50,
  46: 700.84,
  47: 723.33,
  48: 745.87,
  49: 768.44,
  50: 786.79,
  51: 809.54,
  52: 832.33,
  53: 855.16,
  54: 878.04,
  55: 899.48,
  56: 919.36,
  57: 946.04,
  58: 974.76,
  59: 1003.58,
  60: 1030.08,
  61: 1056.64,
  62: 1085.25,
  63: 1113.92,
  64: 1149.26,
  65: 1178.06,
  66: 1200.22,
  67: 1227.66,
  68: 1257.24,
  69: 1284.92,
  70: 1314.75,
  71: 1342.67,
  72: 1372.75,
  73: 1396.32,
  74: 1427.31,
  75: 1458.37,
  76: 1482.34,
  77: 1511.91,
  78: 1541.55,
  79: 1569.15,
  80: 1596.15,
  81: 1622.42,
  82: 1648.07,
  83: 1666.38,
  84: 1684.68,
  85: 1702.98,
  86: 1726.10,
  87: 1754.67,
  88: 1785.87,
  89: 1817.14,
  90: 1851.06
}

// 各等级击破基础伤害
export const breakBaseDmg = {
  1: 54.00,
  2: 58.00,
  3: 62.00,
  4: 67.53,
  5: 70.51,
  6: 73.52,
  7: 76.57,
  8: 79.64,
  9: 82.74,
  10: 85.87,
  11: 91.49,
  12: 97.07,
  13: 102.59,
  14: 108.06,
  15: 113.47,
  16: 118.84,
  17: 124.15,
  18: 129.41,
  19: 134.62,
  20: 139.77,
  21: 149.33,
  22: 158.80,
  23: 168.18,
  24: 177.46,
  25: 186.65,
  26: 195.75,
  27: 204.75,
  28: 213.66,
  29: 222.48,
  30: 231.20,
  31: 246.43,
  32: 261.18,
  33: 275.47,
  34: 289.32,
  35: 302.73,
  36: 315.71,
  37: 328.29,
  38: 340.47,
  39: 352.26,
  40: 363.67,
  41: 408.12,
  42: 451.79,
  43: 494.68,
  44: 536.82,
  45: 578.22,
  46: 618.92,
  47: 658.91,
  48: 698.23,
  49: 736.89,
  50: 774.90,
  51: 871.06,
  52: 964.87,
  53: 1056.42,
  54: 1145.79,
  55: 1233.06,
  56: 1318.30,
  57: 1401.58,
  58: 1482.96,
  59: 1562.52,
  60: 1640.31,
  61: 1752.32,
  62: 1861.90,
  63: 1969.12,
  64: 2074.07,
  65: 2176.80,
  66: 2277.39,
  67: 2375.91,
  68: 2472.42,
  69: 2566.97,
  70: 2659.64,
  71: 2780.30,
  72: 2898.60,
  73: 3014.60,
  74: 3128.37,
  75: 3239.98,
  76: 3349.47,
  77: 3456.92,
  78: 3562.38,
  79: 3665.91,
  80: 3767.55
}
