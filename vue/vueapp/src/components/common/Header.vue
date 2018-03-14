<template>
  <div class="head" :style="{background:bgColor}">
    <span class="home" @click="$emit('home')">首页</span>
    <span class="login" @click="$emit('login')">登录</span>
    <h2 class="title">
      <slot name="title"></slot>
    </h2>

  </div>
</template>

<script>
  export default{
      props:['bgColor']
  }
</script>

<style scoped>
.head{
  height: 1rem;
  position: fixed;
  width: 100%;
  line-height: 1rem;
  z-index: 2;
}
.title{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: #fff;
}
.home{
  color: #fff;
  margin-left: 0.1rem;
  font-size: .3rem;
}
.login{
  color: #fff;
  margin-right: 0.1rem;
  float: right;
  font-size: .3rem;
}
</style>
