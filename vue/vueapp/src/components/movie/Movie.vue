<template>
  <div>
    <ul class="list">
      <li class="movie" v-for="movie in movieList" :key="movie.id" @click="getMovieDetail(movie.id)">
        <div class="movie-img">
          <img :src="movie.img" alt="">
        </div>
        <div class="movie-info">
          <div class="movie-head">
            <p v-text="movie.nm" class="movie-name"></p>
            <p v-text="movie.sc==0?movie.wish+'人想看':movie.sc+'分'" class="movie-score"></p>
          </div>
          <p v-text="movie.cat"></p>
          <p class="movie-star">主演：{{ movie.star }}</p>
          <p v-text="movie.showInfo" class="movie-show"></p>
          <a href="" v-text="movie.preSale==1?'预售':'购票'" class="movie-buy" :style="{background:movie.preSale==1?'#52B0EB':'#EF4238'}"></a>
        </div>
      </li>
    </ul>
    <div class="loading" v-show="isLoading">
      <img src="../../assets/img/load.gif" alt="">
    </div>
    <div class="tip" v-show="isEnd">
      <h3>数据到底了(￣▽￣)~*</h3>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'

  export default{
    data(){
      return{
        movieList:[],
        isLoading: true,
        isEnd:false
      }
    },
    methods:{
      getMovieData(){
        axios.get(
            API_PROXY+`http://m.maoyan.com/movie/list.json?type=hot&offset=${this.movieList.length}&limit=10`
        ).then(res => {
            let list = res.data.data.movies;
            if (list.length<10){
                this.isEnd=true;
            }
            this.movieList=this.movieList.concat(list);
            this.isLoading=false;
          }).catch(res => {
            alert('数据丢了┌╏ º □ º ╏┐')
          }
        )
      },
      getMovieDetail(movieId){
          this.$router.push(`/moviedetail/${movieId}`);
      }
    },
    created() {
      this.getMovieData();
    },
    mounted(){
        window.onscroll=()=>{

            let scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
            let clientHeight=document.documentElement.clientHeight;
            let scrollHeight=document.documentElement.scrollHeight;
            if (scrollTop+clientHeight==scrollHeight){
              this.isLoading=true;
              setTimeout(() => {
                this.getMovieData();
              }, 1000);

            }
        }
    }
  }
</script>

<style scoped>

  .movie{
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 0.2rem 0.2rem;
  }
  .movie-img{
    flex-grow: 3;
    width: 0;
    margin-right: 0.1rem;
  }
  .movie-info{
    flex-grow: 7;
    width: 0;
    position: relative;
  }
  .movie-head{
    display: flex;
  }

  .movie-name{
    font-weight: bolder;
    flex-grow: 3;
    width: 0;
    font-size: .3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .movie-score{
    flex-grow: 3;
    width: 0;
    color: #FFB400;
    font-size: .32rem;
    float: right;
    text-align: right;
    display: block;
  }
 /* .movie-score::after{
    content: 'movie.sc==0?"想看":"分"';
    font-size: .2rem;
    float: right;

  }*/
  .movie-star,.movie-show{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 1.2rem;
  }
  .movie-buy{
    position: absolute;
    right: 0;
    bottom: 0.15rem;
    padding: .2rem .25rem;
    font-size: .34rem;
    line-height: .25rem;
    color: #fff;
    border-radius: .06rem;
    display: inline-block;
    cursor: pointer;
  }
  .loading{
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 1rem;
  }
  .tip {
    text-align: center;
  }
</style>
