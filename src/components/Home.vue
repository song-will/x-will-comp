<template>
    <div>
        child-home
        <el-button @click="link" type="primary">link to about</el-button>
        <el-button @click="linkVue3">跳转vue3</el-button>
        <TestMain />
        <TestComp1 />
    </div>
</template>

<script>
// import TestMain from 'app_expose/TestMain.vue'
import TestComp1 from './TestComp1.vue'
export default {
    name: 'Home',
    components: {
        TestMain: () => import('app_expose/TestMain.vue'),
        // TestMain,
        TestComp1
    },
    methods: {
        link () {
            this.$router.push('/about')
        },
        linkVue3 () {
            window.history.pushState(null, null, '/comp2')
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