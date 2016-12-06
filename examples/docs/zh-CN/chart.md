<script>
  import Highcharts from 'highcharts'
  import VueHighcharts from 'vue-highcharts'
  import Vue from 'vue'
  Vue.use(VueHighcharts);
  var options1 = {
        chart: {
                  type: 'column'
              },
              title: {
                  text: '响应式图表'
              },
              subtitle: {
                  text: '支持图表组件根据大小响应切换位置和样式'
              },
              legend: {
                  align: 'right',
                  verticalAlign: 'middle',
                  layout: 'vertical'
              },
              xAxis: {
                  categories: ['Apples', 'Oranges', 'Bananas'],
                  labels: {
                      x: -10
                  }
              },
              yAxis: {
                  allowDecimals: false,
                  title: {
                      text: 'Amount'
                  }
              },
              series: [{
                  name: 'Christmas Eve',
                  data: [1, 4, 3]
              }, {
                  name: 'Christmas Day before dinner',
                  data: [6, 4, 2]
              }, {
                  name: 'Christmas Day after dinner',
                  data: [8, 4, 3]
              }],
              responsive: {
                  rules: [{
                      condition: {
                          maxWidth: 500
                      },
                      chartOptions: {
                          legend: {
                              align: 'center',
                              verticalAlign: 'bottom',
                              layout: 'horizontal'
                          },
                          yAxis: {
                              labels: {
                                  align: 'left',
                                  x: 0,
                                  y: -5
                              },
                              title: {
                                  text: null
                              }
                          },
                          subtitle: {
                              text: null
                          },
                          credits: {
                              enabled: false
                          }
                      }
                  }]
              }
  };
   var options2 = {
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
                         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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

         var options3 = {
                chart: {
                type: 'spline',

                marginRight: 10,
                events: {
                    load: function () {
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                              text: 'Live random data'
                          },
                          xAxis: {
                              type: 'datetime',
                              tickPixelInterval: 150
                          },
                          yAxis: {
                              title: {
                                  text: 'Value'
                              },
                              plotLines: [{
                                  value: 0,
                                  width: 1,
                                  color: '#808080'
                              }]
                          },
                          tooltip: {
                              formatter: function () {
                                  return '<b>' + this.series.name + '</b><br/>' +
                                      Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                                      Highcharts.numberFormat(this.y, 2);
                              }
                          },
                          legend: {
                              enabled: false
                          },
                          exporting: {
                              enabled: false
                          },
                          series: [{
                              name: 'Random data',
                              data: (function () {
                                  // generate an array of random data
                                  var data = [],
                                      time = (new Date()).getTime(),
                                      i;
                                  for (i = -19; i <= 0; i += 1) {
                                      data.push({
                                          x: time + i * 1000,
                                          y: Math.random()
                                      });
                                  }
                                  return data;
                              }())
                          }]
                };


  export default {
    name: 'charts',
    data() {
      return {
        options1: options1,
        options2: options2,
        options3: options3,

      };
    },
    methods: {

    }
  }
</script>

## chart 图表

用于页面中展示重要的提示信息。

### 基本用法1

基础折线

::: demo Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。
```html
<template>
  <section>
    <highcharts :options="options1" ref="highcharts"></highcharts>

  </section>
</template>
```
:::



## chart 图表

用于页面中展示重要的提示信息。

### 基本用法1

基础折线

::: demo Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。
```html
<template>
  <section>
    <highcharts :options="options2" ref="highcharts"></highcharts>

  </section>
</template>
```
:::

## chart 图表

用于页面中展示重要的提示信息。

### 基本用法1

基础折线

::: demo Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。
```html
<template>
  <section>
    <highcharts :options="options3" ref="highcharts"></highcharts>

  </section>
</template>
```
:::
