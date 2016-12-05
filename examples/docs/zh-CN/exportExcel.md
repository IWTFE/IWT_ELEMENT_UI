<script>
  export default {
    data () {
      return {
        tabledata: [{
					id:1000,
					name: 'lanqy1',
					sex: 1,
					age: 20,
					birth:'1996-03-02',
					addr:'广东广州天河体育中心'
				}, {
					id:1001,
					name: 'lanqy2',
					sex: 1,
					age: 20,
					birth:'1996-03-02',
					addr:'广东广州天河体育中心'
				}, {
					id:1002,
					name: 'lanqy3',
					sex: 0,
					age: 20,
					birth:'1996-03-02',
					addr:'广东广州天河体育中心'
				}, {
					id:1003,
					name: 'lanqy4',
					sex: 1,
					age: 20,
					birth:'1996-03-02',
					addr:'广东广州天河体育中心'
				}, {
					id:1004,
					name: 'lanqy5',
					sex: 1,
					age: 20,
					birth:'1996-03-02',
					addr:'广东广州天河体育中心'
				}, {
					id:1005,
					name: 'lanqy6',
					sex: 1,
					age: 20,
					birth:'1996-03-02',
					addr:'广东广州天河体育中心'
				}, {
					id:1006,
					name: 'lanqy7',
					sex: 1,
					age: 20,
					birth:'1996-03-02',
					addr:'广东广州天河体育中心'
				}, {
					id:1007,
					name: 'lanqy8',
					sex: 1,
					age: 20,
					birth:'1996-03-02',
					addr:'广东广州天河体育中心'
				}],
        tabletitle: {'title':['#','姓名','性别','年龄','生日','地址']}
      }
    }
  }
</script>


## exportExcel 导出Excel文件

### 基础用法
导入
插入export-excel标签，并传表头和表格数据（listData，listTitle）

:::demo 参数listData 是一个数组，listTitle是一个{"title":[...]}的对象

```html
<template>
    <export-excel :listtitle="tabletitle" :listdata="tabledata"></export-excel>
</template>

```
:::
