export default {
  categories: [
    {
      name: '企业',
      itemStyle: {
        normal: {
          color: '#ff3333',
          borderColor: '#fff',
          borderWidth: 1,
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.3)'
        }
      }
    },
    {
      name: '合同',
      itemStyle: {
        normal: {
          color: '#1f2d3d',
          opacity: 1,
          borderColor: '#fff',
          borderWidth: 1,
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.3)'
        }
      }
    },
    {
      name: '属性',
      itemStyle: {
        normal: {
          color: '#1f2d3d',
          opacity: 0.6,
          borderColor: '#fff',
          borderWidth: 1,
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.3)'
        }
      }
    }
  ],
  data: [
    {
      name: '中建钢构天津有限公司',
      symbolSize: 30,
      category: 0,
      draggable: true
    },
    {
      name: '云链电子供应链管理（深圳）有限公司',
      symbolSize: 30,
      category: 0,
      draggable: true
    },
    {
      name: '钢材采购合同',
      symbolSize: 30,
      category: 1,
      draggable: true
    },
    {
      name: '天津西青区王稳庄镇高端金属制品工业区盛达五支路18号',
      symbolSize: 20,
      category: 2,
      draggable: true
    },
    {
      name: '2017-06-22',
      symbolSize: 20,
      category: 2,
      draggable: true
    },
    {
      name: '西青区王稳庄镇高端金属制品工业区盛达五支路18号',
      symbolSize: 20,
      category: 2,
      draggable: true
    },
    {
      name: '广东省深圳市福田区梅林街道梅林路与凯丰路交汇处理想时代大厦',
      symbolSize: 20,
      category: 2,
      draggable: true
    },
    {
      name: '郑新类',
      symbolSize: 20,
      category: 2,
      draggable: true
    }
  ],
  links: [
    {
      source: '中建钢构天津有限公司',
      target: '钢材采购合同'
    },
    {
      source: '云链电子供应链管理（深圳）有限公司',
      target: '钢材采购合同'
    },
    {
      source: '钢材采购合同',
      target: '天津西青区王稳庄镇高端金属制品工业区盛达五支路18号'
    },
    {
      source: '钢材采购合同',
      target: '2017-06-22'
    },
    {
      source: '中建钢构天津有限公司',
      target: '西青区王稳庄镇高端金属制品工业区盛达五支路18号'
    },
    {
      source: '云链电子供应链管理（深圳）有限公司',
      target: '广东省深圳市福田区梅林街道梅林路与凯丰路交汇处理想时代大厦'
    },
    {
      source: '云链电子供应链管理（深圳）有限公司',
      target: '郑新类'
    }
  ],
}
