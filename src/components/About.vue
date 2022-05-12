<template>
  <div>
      child-about
      <el-button @click="back">返回主应用</el-button>
  </div>

</template>

<script>
export default {
  name: "About",
  data() {
    return {};
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

<style>
</style>