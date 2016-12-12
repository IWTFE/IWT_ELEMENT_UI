<script>
  import '../../../packages/print/src/style.css';
  export default { }
</script>

## 打印
用于打印指定的页面内容，如列表、文章、表格等。

### 打印本页
:::demo 用于打印本页，可直接使用指令创建打印按钮
```html
  <el-print></el-print>
```
:::

### 打印指定内容
:::demo 用于打印页面指定元素内的内容，通过id来确定需要打印的元素。通过`:target`参数传入需要打印的元素的`id`。注意：打印区域的部分打印样式需要单独指定`class`名称：如需要打印边框的div或者table需要添加类名:`border`,打印的标题需要类名:`title`。`由于A4纸打印的区域纵向宽度为650px,横向宽度为1030px,请不要打印过宽的表格或者内容。`
```html
  <el-print :target="'print'"></el-print>
  <div id="print">
      <h1 class="title">中国福利彩票积分服务</h1>
      <h1 class="title"><span class="undeline">浙江省</span>省级积分服务月账单</h1>
      <table border="0" cellspacing="0" cellpadding="8" align="center" class="head_info">
        <tbody><tr>
          <td class="bold" width="150">客户编号：</td>
          <td width="150"></td>
          <td width="150" class="bold">客户名称：</td>
          <td width="100"></td>
        </tr>
        <tr>
          <td class="bold">客户地址：</td>
          <td></td>
          <td class="bold">客户邮编：</td>
          <td></td>
        </tr>
        <tr>
          <td class="bold">总金额（小写）：</td>
          <td>￥1236333.46</td>
          <td class="bold">账期：</td>
          <td>2016年9月</td>
        </tr>
        <tr>
          <td class="bold">总金额（大写）：</td>
          <td colspan="3">人民币壹佰贰拾叁万陆仟叁佰叁拾叁元肆角陆分</td>
        </tr>
      </tbody></table>
      <p class="text-r bold">英泰伟业信息技术股份有限公司</p>
      <p class="text-r">北京市海淀区厂洼中街66号英泰科技大厦四层</p>
      <p class="text-r">生成日期：2016-11-20</p>
      <h2 class="border-t">附1：积分服务账单详情</h2>
      <table border="0" cellspacing="0" cellpadding="8" align="center" class="border">
        <thead>
          <tr><th>参与类型</th>
          <th>省级积分</th>
          <th>游戏币</th>
          <th>金额（元）</th>
        </tr></thead>
			<tbody><tr>
	          <th>参与兑换的数量</th>
	          <td class="text-r">5,577,000</td>
	          <td class="text-r">9,683,862,000</td>
	          <td class="text-r">--</td>
	        </tr>
	        <tr>
	          <th>参与游戏的数量</th>
	          <td class="text-r">978,142,256</td>
	          <td class="text-r">0</td>
	          <td class="text-r">--</td>
	        </tr>
	        <tr>
	          <th>本月合计</th>
	          <td class="text-r">983,719,256</td>
	          <td class="text-r">9,683,862,000</td>
	          <td class="text-r">1236333.46</td>
	        </tr>
      </tbody>
    </table>
</div>
```
:::

### Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| target | 要打印的目标ID，可选值，如不指定，则默认打印本页 | string | — | — |
| stylesheet | 打印内容的样式表地址（请尽量使用绝对地址），可选值，如不指定，则使用默认样式应用于打印页 | string | — | — |
