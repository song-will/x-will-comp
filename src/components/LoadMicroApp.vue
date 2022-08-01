<template>
  <div>
    <el-button @click="() => trigger()">load-micro-apps</el-button>
    <!-- <el-drawer :visible.sync="modelValue" @opened="loadMicroApp" @close="unmount" :size="778">
      <div id="load-micro-app"></div>
    </el-drawer> -->
    <el-drawer :visible.sync="modelValue" :size="778">
      <MicroApp :appConfig="appConfig" name="comp4" :is-mount="modelValue" url="/" />
    </el-drawer>
    <div class="box">
      <MicroApp :appConfig="appConfig" name="comp4" :is-mount="boxModel" url="/about" />
    </div>
  </div>
</template>

<script>
import MicroApp from './load-micro-app/MicroApp.vue'
import appConfig from '@/core/appConfig'
export default {
  name: 'LoadMicroApp',
  components: {
    MicroApp
  },
  data() {
    return {
      modelValue: false,
      appConfig,
      boxModel: false
    }
  },
  methods: {
    trigger(flag = true) {
      this.modelValue = flag
    }
  },
  created() {
    this.boxModel = true
    setTimeout(() => {
      this.boxModel = false
    }, 3000);
  }
}
</script>

<style lang="less" scoped>
.box {
  height: 400px;
  width: 200px;
  border: 1px solid #ccc;
}
</style>
