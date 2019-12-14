import echarts from 'echarts'
import 'echarts/theme/macarons'

export default {
  initEchart: function(ref, data) {
    let createdchart = echarts.init(ref, 'macarons');
    createdchart.setOption({
      toolbox: {
        show: true,
        feature: {
          restore: {
            show: true
          },
        },
      },
      animationDuration: 3000,
      animationEasingUpdate: 'quinticInOut',
      series: [{
        name: '元模型',
        type: 'graph',
        layout: 'force',
        height: 1000,
        hoverAnimation: true,
        edgeSymbol: ['', 'arrow'],
        edgeLabel: {
          normal: {
            textStyle: {
              fontSize: 16
            }
          }
        },
        force: {
          repulsion: 1000,
          edgeLength: 100
        },
        categories: data.categories,
        data: data.data,
        links: data.links,
        focusNodeAdjacency: true,
        roam: true,
        label: {
          normal: {
            show: true,
            position: 'top',
            textStyle: {
              fontSize: 16
            }
          }
        },
        lineStyle: {
          normal: {
            curveness: 0,
            type: 'solid'
          },
          formatter: '{b}'
        },
        emphasis: {
          lineStyle: {
            width: 10
          }
        }
      }]
    });
    return createdchart;
  }
}
