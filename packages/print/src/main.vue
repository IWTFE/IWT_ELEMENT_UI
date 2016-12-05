<template>
  <div class="el-print">
    <div class="el-print__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="el-print__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'el-print',

    props: ['header', 'bodyStyle']
  };
</script>
