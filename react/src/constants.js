export default {
  url: 'http://localhost:5000',
  category: {
    '11': '机架式服务器',
    '12': '机架式存储设备',
    '13': '刀片式服务器机框',
    '14': '定制化服务器机框',
    '15': '小型机',
    '16': '网络交换机',
    '17': '路由器',
    '18': '其他网络设备',
    '19': '配线模块',
  },
  auth: {
    reviewer: 'reviewer',
    applicant: 'applicant',
  },
  on: {
    '-2': '下电审核中',
    '-1': '上电审核中',
    '0': '未上电',
    '1': '已上电',
  },
  onCabinet: {
    '-2': '下柜审核中',
    '-1': '上柜审核中',
    '0': '未上柜',
    '1': '已上柜',
  },
  deviceMap: {
    Numbering: '设备编号',
    cabinetNumbering: '机柜编号',
    height: '设备高度（U）',
    category: '设备类型',
    responsible: '责任人',
    ratedPower: '额定功率',
    actualPowerLoad: '实际功率',
    actualTemperature: '实际功率',
    thresholdTemperature: '温度告警阈值',
    on: '是否上电',
    onCabinet: '是否上柜',
    uNumbering: '安装位置',
    startPosition: '起始位置',
    endPosition: '结束位置',
  },
};
