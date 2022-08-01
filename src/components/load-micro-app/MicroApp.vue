<template>
  <div>
    <div ref="loadMicroApp"></div>
  </div>
</template>

<script>
import { loadMicroApp } from 'qiankun'

export default {
  name: 'MicroApp',
  props: {
    url: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    appConfig: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      microApp: null,
      curLoadApp: {
        name: 'app',
        entry: '',
        container: '#container',
        props: {}
      }
    }
  },
  created() {
    this.curLoadApp = this.appConfig.find(item => item.name === this.name)
  },
  mounted() {
    console.log('mount')
    this.mount()
  },
  methods: {
    loadApp() {
      console.log('init', this.microApp, this.curLoadApp)
      if (this.curLoadApp) {
        this.microApp = loadMicroApp({
          ...this.curLoadApp,
          container: this.$refs.loadMicroApp,
          props: {
            initUrl: this.url
          }
        })
      }
      console.log('microApp', this.microApp)
    },
    mount() {
      if (!this.microApp) {
        this.loadApp()
      } else {
        this.microApp && this.microApp.mount()
      }
    },
    unmount() {
      console.log('unmount', this.microApp)
      this.microApp && this.microApp.unmount()
    }
  },
  beforeDestroy() {
    this.unmount()
  }
}
</script>

<style lang="less" scoped>
</style>
