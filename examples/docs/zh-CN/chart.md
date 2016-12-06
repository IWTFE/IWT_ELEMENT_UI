<script>
  import 'highcharts'
  import VueHighcharts from 'vue-highcharts'
  import Vue from 'vue'
  Vue.use(VueHighcharts);
  var options = {
  title: {
    text: 'Monthly Average Temperature',
    x: -20 //center
  },
  subtitle: {
    text: 'Source: WorldClimate.com',
    x: -20
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
  },
  yAxis: {
    title: {
      text: 'Temperature (°C)'
    },
    plotLines: [{
      value: 0,
      width: 1,
      color: '#808080'
    }]
  },
  tooltip: {
    valueSuffix: '°C'
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
  },
  series: [{
    name: 'Tokyo',
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
  }, {
    name: 'New York',
    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
  }, {
    name: 'Berlin',
    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
  }, {
    name: 'London',
    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
  }]
  };
  export default {
    name: 'charts',
    data() {
      return {
        options: options
      };
    },
    methods: {
      updateCredits: function() {
        var chart = this.$refs.highcharts.chart;
        chart.credits.update({
          style: {
            color: '#' + (Math.random() * 0xffffff | 0).toString(16)
          }
        });
      }
    }
  }
</script>

## chart 图表

用于页面中展示重要的提示信息。

### 基本用法

页面中的非浮层元素，不会自动消失。

::: demo Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。
```html
<template>
  <section>
    <highcharts :options="options" ref="highcharts"></highcharts>
	  <button @click="updateCredits">update credits</button>
  </section>
</template>
```
:::
