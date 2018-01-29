<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="home">首页</button>
    </div>
    <div>
       <router-link to='/'>首页</router-link>
       <router-link to='/test'>test</router-link>
       <router-link :to="{name:'test1',params:{name:'zs',age:18}}">子路由1</router-link>
       <router-link to='/test/test2'>子路由2</router-link>
       <router-link to='/testUrl/5/lisi'>测试URL</router-link>
       <router-link to='/home'>redirect</router-link>
       <router-link to='/redirectparam/6/ww'>redirectparam</router-link>
       <router-link to='/abc'>alias</router-link>
    </div>
    <transition name='fade' mode='out-in'>
       <router-view/>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    home(){
      // this.$router.push('/testUrl/5/zhangsan');
      this.$router.push('/');
    },
    back(){
      this.$router.go(-1);
    },
    forward(){
      this.$router.go(1);
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}

.fade-enter-to{
  opacity: 1;
}

.fade-enter-active{
  transition: opacity 1s;
}

.fade-leave{
  opacity: 1;
}

.fade-leave-to{
  opacity: 0;
}

.fade-leave-active{
  transition: opacity 1s;
}
</style>
