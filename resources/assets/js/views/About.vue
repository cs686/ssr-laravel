<template>
    <div class="about">
        <h4 class="title">大家好</h4>
        <ul>
            <li v-for="item in list">{{ item }}</li>
        </ul>
        <router-link to="/">Go to Home</router-link>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    
    export default {
        name: 'About',
        serverCacheKey: () => 'about',
        computed: {
            ...mapState({
                list: 'list'
            })
        }
    }
</script>
<style lang="scss">
    .about{
        .title{
            color: red;
        }
    }
</style>