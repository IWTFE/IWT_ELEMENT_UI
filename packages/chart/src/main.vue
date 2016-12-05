<template>
  <div class="el-chart">
    <div class="el-chart__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="el-chart__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'el-chart',

    props: ['header', 'bodyStyle']
  };
</script>
