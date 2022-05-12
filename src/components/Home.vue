<template>
    <div>
        child-home
        <el-button @click="link" type="primary">link to about</el-button>
    </div>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        link () {
            this.$router.push('/about')
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