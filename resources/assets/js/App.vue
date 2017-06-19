<template>
    <div id="root">
        <h4>根目录的互动关系</h4>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                name: 'Test'
            }
        }
    }
</script>
<style lang="scss">
    .sub{
        color: blue;
    }
</style>