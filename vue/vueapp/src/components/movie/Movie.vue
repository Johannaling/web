<template>
  <div>
    <ul class="list">
      <li class="movie" v-for="movie in movieList" :key="movie.id">
        <div class="movie-img">
          <img :src="movie.img" alt="">
        </div>
        <div class="movie-info">
          <p v-text="movie.nm"></p>
          <p v-text=""></p>
        </div>

      </li>
    </ul>
  </div>

</template>

<script>
  import axios from 'axios'

  export default{
    data(){
      return{
        movieList:[]
      }
    },
    methods:{
      getMovieData(){
        axios.get(
          API_PROXY+`http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=10`
        ).then(
          res =>{
            console.log(res);
            let list = res.data.data.movies;
            this.movieList=list
          }

        ).catch(
          res => {
            alert('数据丢了┌╏ º □ º ╏┐')
          }
        )
      }
    },
    created() {
      this.getMovieData();
    }
  }
</script>

<style scoped>

</style>
