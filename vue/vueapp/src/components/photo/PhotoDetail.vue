<template >
  <div>
    <v-touch  class="container" :style="styleObj" @swipeleft="onSwipeLeft" @swiperight="onSwipeRight" @tap="tap" >
    </v-touch>
  </div>

</template>

<script>
 /* import store from '@/vuex/store';*/

  export default{
    data(){
        return{
          nowIndex: 0,
          pLength:''
        }
    },
    created(){
      this.nowIndex=this.$route.params.index;
    },
    computed:{
      styleObj(){
          return `background:url(static/img/${this.nowIndex}.jpg) no-repeat center/contain`;
      }
    },
    methods: {
      onSwipeLeft(){
        this.nowIndex++;
        if (this.nowIndex == 24) {
          this.nowIndex = 0;
        }
      },
      onSwipeRight(){
        this.nowIndex--;
        if (this.nowIndex == -1) {
          this.nowIndex = 24 - 1;
        }
      },
      tap(){
        this.$router.go(-1);
      }
    }

  }


</script>

<style scoped>
  .container{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;


  }
</style>
