<script>
export default {
}
</script>


## file-upload 图片裁剪

### 基础用法

插入example-file-upload标签即可。

:::demo 此组件将会将图片转换成canvas，之后再通过截取的四个点的坐标获得其中内容，选确定之后，再讲canvas转化成图片，截取弹出框内的图片及选择区域初始大小是可以修改的，修改file-upload.vue文件中的$height值即可。修改example里的.file-upload宽度高度，可以修改选取图片后的展现尺寸。

```html
<template lang="html">
  <example-file-upload class="file-upload" ref="fileUpload"></example-file-upload>
</template>

<script>
export default {
}
</script>

```
:::
