<template>
  <ul class="footer" :style="{background:bgColor}">
    <li><router-link to="/">电影</router-link></li>
    <li><router-link to="/music">音乐</router-link></li>
    <li><router-link to="/book">书籍</router-link></li>
    <li><router-link to="/photo">图片</router-link></li>
  </ul>
</template>

<script>
  export default{
      props:['bgColor']
  }
</script>

<style scoped>
  .footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1rem;
    display: flex;
   /* background: #ff6700;*/
  }
  .footer li{
    flex-grow: 1;
    text-align: center;
    line-height: 1rem;
  }
  .footer li a{
    color: #ccc;
  }
  .footer li a.router-link-exact-active{
    color: #fff;
  }
</style>
