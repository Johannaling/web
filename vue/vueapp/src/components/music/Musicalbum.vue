<template>
  <div>
    <aplayer  :music="musiclist" v-if="loadSuccess" :showlrc="true" :mutex="true"></aplayer>
  </div>
</template>

<script>
  import Aplayer from "vue-aplayer";
  import axios from 'axios';

  export default{
    components: {
      Aplayer
    },
    data(){
        return{
          musiclist: [],
          loadSuccess: false
        }
    },
    created(){
        axios.get('/static/data/musicdata.json').then(res => {
          res.data.musicData.forEach(element => {
            this.musiclist.push({
              title: element.title,
              author: element.author ,
              url: element.src,
              pic: element.musicImgSrc ,
              lrc: '/static/' + element.lrc
            });
          });
          this.loadSuccess=true
        })
    }
  }
</script>

<style scoped>

</style>
