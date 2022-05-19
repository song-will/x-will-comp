<template>
  <div>
      child-about
      <el-button @click="back">返回主应用</el-button>
      <img :src="peng" alt="">
  </div>

</template>

<script>
import peng from '@/assets/images/peng.webp'

export default {
  name: "About",
  data() {
    return {
      peng
    };
  },
  created () {
      console.log('$super', window.$superRouter)
  },
  methods: {
      back () {
          window.history.pushState({name: 'song'}, 'back', '/')
      }
  }
};
</script>
<style lang="less" scoped>
img {
  width: 200px;
}
</style>