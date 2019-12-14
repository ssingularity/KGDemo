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
      name: '企业',
      symbolSize: 30,
      category: 0
    },
    {
      name: '合约',
      symbolSize: 30,
      category: 1
    },
    {
      name: 'location',
      symbolSize: 20,
      category: 2
    },
    {
      name: 'date',
      symbolSize: 20,
      category: 2
    },
    {
      name: 'regLocation',
      symbolSize: 20,
      category: 2
    },
    {
      name: 'creditCode',
      symbolSize: 20,
      category: 2
    },
    {
      name: 'regNumber',
      symbolSize: 20,
      category: 2
    },
    {
      name: 'legalPersonName',
      symbolSize: 20,
      category: 2
    },
    {
      name: 'industry',
      symbolSize: 20,
      category: 2
    },
    {
      name: 'alias',
      symbolSize: 20,
      category: 2
    },
    {
      name: 'businessScope',
      symbolSize: 20,
      category: 2
    },
    {
      name: 'actualCapital',
      symbolSize: 20,
      category: 2
    }
  ],
  links: [
    {
      source: '企业',
      target: '合约'
    }, {
      source: '合约',
      target: 'location'
    }, {
      source: '合约',
      target: 'date'
    }, {
      source: '企业',
      target: 'regLocation'
    }, {
      source: '企业',
      target: 'creditCode'
    }, {
      source: '企业',
      target: 'regNumber'
    }, {
      source: '企业',
      target: 'legalPersonName'
    }, {
      source: '企业',
      target: 'industry'
    }, {
      source: '企业',
      target: 'alias'
    }, {
      source: '企业',
      target: 'businessScope'
    }, {
      source: '企业',
      target: 'actualCapital'
    }
  ],
}
