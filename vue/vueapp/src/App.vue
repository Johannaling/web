<template>
  <div id="app">
    <common-header :bgColor="bg" @home="home">
      <span slot="title">{{ title }}</span>
    </common-header>
    <router-view class="content"></router-view>
    <common-footer @change="switchTab" :bgColor="bg"></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/Header';
  import CommonFooter from '@/components/common/Footer';

  export default {
    name: 'App',
    components:{
        CommonHeader,
        CommonFooter
    },
    data(){
        return{
            title:'Movie',
            bg:'rgb(239,66,56)'
        }
    },
    methods:{
        switchTab(tabName){
          this.title=tabName;
          switch(tabName){
            case 'Movie':
                this.bg='rgb(239,66,56)';
                break;
            case'Music':
                this.bg='rgb(0, 150, 136)';
                break;
            case'Book':
              this.bg='rgb(121, 85, 72)';
              break;
            case'Photo':
              this.bg='rgb(63, 81, 181)';
              break;
            default:
              this.bg='rgb(33, 150, 243)';
          }
        },
      home(){
            this.switchTab('Movie');
            this.$router.push('/')
      }
    }
  }
</script>

<style>
  #app .content{
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
</style>
