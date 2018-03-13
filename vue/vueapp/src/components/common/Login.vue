<template>
  <div class="login clearfix">
      <p>
        用户名：<input type="text" name="username" >
      </p>
      <p>
        密 &nbsp  码：<input type="password" name="password" >
      </p>
      <input type="submit" value="登录" name="submit" @click="back">
      <p class="register" @click="register">若没有注册，请注册</p>


  </div>
</template>

<script>

  export default{
      methods:{
        register(){
          this.$router.push('/register')
        },
        back(){
          this.$router.push('/')
        }
        /*login(){
          if(this.username == "" || this.password == ""){
            alert("请输入用户名或密码")
          }else{
            let data = {'username':this.username,'password':this.password};
            /!*接口请求*!/
            this.$http.post('http://localhost/vueapi/index.php/Home/user/login',data).then((res)=>{
              console.log(res);
              /!*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*!/
              if(res.data == -1){
                this.tishi = "该用户不存在";
                this.showTishi = true
              }else if(res.data == 0){
                this.tishi = "密码输入错误";
                this.showTishi = true
              }else if(res.data == 'admin'){
                /!*路由跳转this.$router.push*!/
                this.$router.push('/main')
              }else{
                this.tishi = "登录成功";
                this.showTishi = true;
                setCookie('username',this.username,1000*60);
                setTimeout(function(){
                  this.$router.push('/movie')
                }.bind(this),1000)
              }
            })
          }
        },
        mounted(){
          /!*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*!/
          if(getCookie('username')){
            this.$router.push('/home')
          }
        */
      },
    /*data(){
      return{
        tishi: '',
        username: '',
        password: '',
      }*/

  }

</script>

<style scoped>
  .login{
    position: absolute;
    top: 2rem;
    padding: .5rem;
  }
  .login p{
    font-size: .4rem;
  }
  input{
    text-decoration: none;
    border: 1px solid rgb(239,66,56);
    width: 100%;
  }
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
  }
  input[name='submit']{
    font-size: .3rem;
    background: rgb(239,66,56);
    color: #fff;
    padding: .1rem;
    border: none;
    border-radius: 4px;
    margin-top: .2rem;
    width: 100%;
  }
  .login .register{
    font-size: .3rem;
    float: right;
    cursor: pointer;

  }

</style>
