<template>
    <div>
        child-home
        <el-button @click="link" type="primary">link to about</el-button>
        <el-button @click="linkVue3">跳转vue3</el-button>
    </div>
</template>

<script>
export default {
    name: 'Home',
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