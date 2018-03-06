<template>
  <div class="detail">

      <div class="detail-info" >
        <div class="detail-background" :style="{background:'url('+detail.img+')'}"></div>
        <div class="detail-desricption">
          <div class="detail-img">
            <img :src="detail.img" alt="">
          </div>
          <div class="detail-content">
            <p class="detail-name">{{ detail.nm }}</p>
            <div class="release-score" >

              <img src="http://ms0.meituan.net/canary/img/star-full-new.png" alt="" class="sc" >


              <img src="http:////ms0.meituan.net/canary/img/star-empty-new.png" alt="">
              <p>{{ detail.sc }}</p>
            </div>
            <p>{{ detail.dir }}</p>
            <p>{{ detail.cat }}</p>
            <p>{{ detail.src }}</p>
            <p>{{ detail.rt }}</p>
          </div>
        </div>
      </div>
    <div class="detail-context">
      <div class="detail-star">
        <h3>主演</h3>
        <p>{{ detail.star }}</p>
      </div>
      <div>
        <h3>简介</h3>
        <div v-html="detail.dra"></div>
      </div>
      <div class="loading" v-show="isLoading">
        <img src="../../assets/img/load.gif" alt="">
      </div>
    </div>

  </div>
</template>

<script>
  import axios from "axios";
  export default{
    data() {
      return {
        detail: {},
        isLoading: true,
        score: 0,
        num: 5,
        /*starImg: */
      };
    },
    created() {
      axios
        .get(
          `${API_PROXY}http://m.maoyan.com/movie/${
            this.$route.params.movieId
            }.json`
        )
        .then(res => {
          this.detail = res.data.data.MovieDetailModel;
          this.isLoading = false;
          console.log(this.detail);
        })
        .catch(res => {
          alert("error");
        });
    },
    computed: {
      starScore(){
          if (this.detail.sc>=8){
              this.score = this.num;
              return this.score;
          }else if(this.detail.sc>=6){
             return this.score = this.num-1;
          }else if(this.detail.sc>=4){
              return this.score = this.num-2;
          }else if(this.detail.sc>=2){
            return this.score = this.num-3;
          }if(this.detail.sc>=0){
            return this.score = this.num-4;
        }
      }
    }

  }

</script>

<style scoped>
  .detail {

  }
  .detail-background{
    filter:blur(0.6rem);
    background-size: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-repeat: no-repeat;
  }
  .detail-info {
    /*display: flex;*/
    border-bottom: 1px solid #ccc;


  }
  .detail-desricption{
    position: relative;
    display: flex;
    padding-top: 0.1rem;
    background: rgba(64,69,77,0.2);
    padding-bottom: 0.1rem;
  }
  .detail-img {
    flex-grow: 1;
    width: 0;
    z-index: 1;
    border: 1px solid #fff;
    margin: 0.2rem;

  }
  .detail-content {
    flex-grow: 2;
    width: 0;
    z-index: 1;
    color: #fff;
  }
  .detail-name {
    font-weight: bolder;
    font-size: .34rem;
  }

  .detail h3 {
    text-align: center;
    font-weight: bolder;
  }

  .detail-star {
    border-bottom: 1px solid #ccc;

  }
  .loading {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .detail-context{
    background: #fff;
    position: relative;

  }
</style>
