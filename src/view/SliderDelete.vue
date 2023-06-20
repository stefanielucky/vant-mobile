<template>
  <div>
    <SwipeCell>
      <template #left>
        <van-button square type="primary" text="选择" />
      </template>
      <van-cell :border="false" title="单元格" value="内容" />
      <template #right>
        <van-button square type="danger" text="删除" />
        <van-button square type="primary" text="收藏" />
      </template>
    </SwipeCell>
  </div>
</template>

<script>
import { SwipeCell } from 'vant';
export default{
  name: "SliderDelete",
  components: {
    SwipeCell
  }
}
</script>

<style>
</style>