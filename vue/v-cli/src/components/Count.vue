<template>
  <div>
    <h1>计数器：{{ $store.state.count }}</h1>
    <button @click="$store.commit('add')">加</button>
    <button @click="$store.commit('reduce')">减</button>
  </div>
</template>
<script>
  import store from '@/vuex/store';
  import {mapState} from 'vuex';
  export default{
      /*data() {
          return {};
      },*/
    store,
    /*computed:{
        count(){
            return this.$store.state.count;
        }
    }*/
    /*computed:mapState({
        count:state => state.count
    })*/
    computed:mapState(['count'])
  };
</script>
