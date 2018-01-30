<template>
  <div>
    <h1>计数器：{{ $store.state.count }}</h1>
    <h1>{{ count }}</h1>
    <button @click="$store.commit('add',2)">加</button>
    <button @click="reduce">减</button>
    <button @click="addAction">addAction</button>
    <button @click="reduceAction">reduceAction</button>
  </div>
</template>
<script>
  import store from '@/vuex/store';
  import {mapState,mapMutations, mapGetters,mapActions} from 'vuex';
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
    /*computed:mapState(['count']),*/
    computed:{
      ...mapState(['count']),
      ...mapGetters(['count'])
    },
    methods: {
      ...mapMutations(['add', 'reduce']),
      ...mapActions(['addAction', 'reduceAction'])
    }
  };
</script>
