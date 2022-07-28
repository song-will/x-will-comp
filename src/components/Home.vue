<template>
    <div>
        child-home
        <el-button @click="link" type="primary">link to about</el-button>
        <el-button @click="linkVue3">跳转vue3</el-button>
        <TestComp1 />
        <LoadMicroApp />
    </div>
</template>

<script>
import TestComp1 from './TestComp1.vue'
import LoadMicroApp from './LoadMicroApp.vue'
export default {
    name: 'Home',
    components: {
        TestComp1,
        LoadMicroApp
    },
    methods: {
        link() {
            this.$router.push('/about')
        },
        linkVue3() {
            window.history.pushState(null, null, '/comp2/')
        }
    }
}
</script>

<style lang="less" scoped>
div {
    span {
        color: orange;
    }
}
</style>
