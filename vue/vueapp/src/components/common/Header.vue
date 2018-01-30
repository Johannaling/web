<template>
  <div class="head" :style="{background:bgColor}">
    <span class="home">首页</span>
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
  /*background: #ff6700;*/
  height: 1rem;
  position: fixed;
  width: 100%;
  line-height: 1rem;
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
}
</style>
