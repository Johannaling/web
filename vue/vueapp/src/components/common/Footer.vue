<template>
  <ul class="footer" :style="{background:bgColor}">
    <li><router-link to="/" @click.native="$emit('change','Movie')">电影</router-link></li>
    <li><router-link to="/music" @click.native="$emit('change','Music')">音乐</router-link></li>
    <li><router-link to="/book" @click.native="$emit('change','Book')">书籍</router-link></li>
    <li><router-link to="/photo" @click.native="$emit('change','Photo')">图片</router-link></li>
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

  }
  .footer li{
    flex-grow: 1;
    text-align: center;
    line-height: 1rem;
  }
  .footer li a{
    color: rgba(53, 58, 59, 0.75);
    outline: none;
    font-size: .35rem;
  }
  .footer li a.router-link-exact-active{
    color: #fff;
  }
</style>
