<template>
  <ul>
    <li v-for="item in billboard" :key="item.id" class="billboard">
      <img :src="item.bg" alt="">
    </li>
  </ul>
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
        return{
          billboard:[]
        }
    },
    created(){
        axios.get('/static/data/musiclist.json').then(res => {
            console.log(res);
            this.billboard=res.data.albums;
      })
    }
  }
</script>

<style scoped>
  .billboard{
    width: 50%;
    float: left;
  }
  .billboard img{
    width: 100%;
  }
</style>
