<style>

.file-upload {
    display: block;
    height: 80px;
    width: 80px;
}

</style>

<template lang="html">
  <file-upload class="file-upload" ref="fileUpload"></file-upload>
</template>

<script>
import fileUpload from '.'

export default {
  components: {
    fileUpload
  }
}
</script>
