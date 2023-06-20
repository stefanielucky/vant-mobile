<template>
  <div>
    <Uploader :after-read="afterRead" />
  </div>
</template>

<script>
import { Uploader } from 'vant';
export default{
  name: "UpLoader",
  components: {
    Uploader
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
  }
}
</script>

<style>
</style>