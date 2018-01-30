<template>
  <div>
    <h1>计数器：{{ $store.state.count }}</h1>
    <button @click="$store.commit('add',2)">加</button>
    <button @click="reduce">减</button>
  </div>
</template>
<script>
  import store from '@/vuex/store';
  import {mapState,mapMutations} from 'vuex';
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
    computed:mapState(['count']),
    methods: mapMutations(['add', 'reduce'])
  };
</script>
