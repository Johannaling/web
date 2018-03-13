<template>
  <div class="login clearfix">

      <p>
        用户名称：<input type="text" name="username" v-model="newUsername" >
      </p>
      <p>
        密 &nbsp &nbsp 码：<input type="password" name="password" v-model="newPassword" >
      </p>
      <p>
        确认密码：<input type="password" name="confirm">
      </p>
    <input type="submit" value="注册" name="Submit" @click="registers">


  </div>
</template>

<script>
  export default{
    data(){
      return{
        tishi: '',
        newUsername: '',
        newPassword: ''
      }
    },
    methods:{
      registers(){
        /*if(this.newUsername == "" || this.newPassword == ""){
          alert("请输入用户名或密码")
        }else{*/
          this.$router.push('/login');
          /*let data = {'username':this.newUsername,'password':this.newPassword};
          this.$http.post('http://localhost/vueapi/index.php/Home/user/register',data).then((res)=>{
            console.log(res);
            if(res.data == "ok"){
              this.tishi = "注册成功";
              this.showTishi = true;
              this.username = '';
              this.password = '';
              /!*注册成功之后再跳回登录页*!/
              setTimeout(function(){
                this.showRegister = false;
                this.showLogin = true;
                this.showTishi = false
              }.bind(this),1000)
            }
          })*/
        }
    }
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
  input[name='Submit']{
    font-size: .3rem;
    background: rgb(239,66,56);
    color: #fff;
    padding: .1rem;
    border: none;
    border-radius: 4px;
    margin-top: .2rem;
    width: 100%;
  }


</style>
