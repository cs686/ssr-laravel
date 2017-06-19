<template>
    <div>
        <h4>首页</h4>
        <h5 v-if="nameNow">你好 {{ nameNow }}</h5>
        <button @click="updateName">改变名称</button>
        <br>
        <br>
        <input v-model="newItem" placeholder="新项目 (输入enter键输入项目内容)" @keyup.13="newItemAdd">
        <br>
        <br>
        <router-link to="/about">去 About</router-link>
    </div>
</template>
<script>
    import {mapActions} from 'vuex';

    export default {
        name: 'Home',
        serverCacheKey: () => 'home',
        data(){
            return {
                nameList: ['Foo', 'Bar', 'John'],
                nameNow: false,
                newItem: ''
            }
        },
        methods: {
            ...mapActions({
                addToList: 'addToList'
            }),
            updateName(){
                let rand = parseInt(Math.random() * 3);
                this.nameNow = this.nameList[rand];
            },
            newItemAdd(){
                if (this.newItem === '') return;
                this.addToList(this.newItem);
                this.newItem = '';
            }
        }
    }
</script>