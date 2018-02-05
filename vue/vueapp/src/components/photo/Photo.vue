<template>
  <ul class="clearfix">
    <li v-for="(item, index) in photoList" :key="index" class="photo" >
      <router-link :to="'/photodetail/'+ (index+1)" @click.native="$emit('length','photoList.length')">
        <img :src="item.src" alt="">
      </router-link>

    </li>
  </ul>
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        photoList:[]
      }
    },
    created(){
      axios.get('/static/data/photodata.json').then(res =>{

        this.photoList=res.data.photoData;
        /*console.log(this.photoList.length);*/
      }).catch(() =>{
        alert('数据出错了')

      })
    },

  }
</script>

<style scoped>
  .photo{
    width: 50%;
    float: left;
  }
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
  }
</style>
