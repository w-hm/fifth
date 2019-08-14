<<<<<<< HEAD
=======
<template>
    <div  class="wrap">
        <Head title="登录&&注册" :show="true"></Head>
        <mt-navbar v-model="selected">
            <mt-tab-item id="login">登录</mt-tab-item>
            <mt-tab-item id="register">注册</mt-tab-item>
        </mt-navbar>

         <mt-tab-container v-model="selected">
            <mt-tab-container-item id="login">
                 <mt-field label="账号" placeholder="请输入用户名" v-model="tel"></mt-field>
                 <mt-field label="密码" placeholder="请输入密码" type="password" v-model="pwd"></mt-field>
                 <mt-button type="primary" size="large" @click="login()">登录</mt-button>
            </mt-tab-container-item>
            <mt-tab-container-item id="register">
                 <mt-field label="账号" placeholder="请输入用户名" v-model="name"></mt-field>
                 <mt-field label="手机" placeholder="请输入手机号" type="tel" v-model="tel"></mt-field>
                 <mt-field label="密码" placeholder="请输入密码" type="password" v-model="pwd"></mt-field>
                 <mt-button type="danger" size="large" @click="rigister">注册</mt-button>
            </mt-tab-container-item>
        </mt-tab-container>

        <div class="tip">
            提示信息:<span>{{tip}}</span>
        </div>

              <div class="foot">
                  <a href="https://public.hanfugou.com/Account/qq" class="btn_qq">
                      <img src="../../../public/img/qq.png" alt="">
                      <span class="f_white">QQ登录</span>
                  </a>
                  <a href="https://public.hanfugou.com/Account/weibo" class="btn_weibo">
                       <img src="../../../public/img/weibo.png" alt="">
                       <span class="f_white">微博登录</span>
                  </a>
              </div>
              <div class="foot2">
                  <img src="../../../public/img/ma.png" alt="" >
                  <img src="../../../public/img/fu.png" alt="">
              </div>
          
    </div>
</template>


<script>
var axios = require("axios")
export default {
    data(){
        return {
            selected:"login",  
            tel:"",
            pwd:"",
            name:"",
            tip:"",
            flag:""
           
        }
    },
    methods:{
        login(){
            if(!this.tel){
                this.tip="账号不能为空"
                return
            }
            // console.log(this.loginInfo)
            axios.post("http://192.168.52.94:8080/hanfugou/login?tel="+this.tel+"&pwd="+this.pwd)
            .then(res=>{
                // console.log(res.data);
                console.log(res.data)
                if(res.data.code){
                    this.tip="用户名与密码不匹配"
                }
                if(res.data.code==2){
                    this.tip="用户名不存在"
                    
                }
                if(res.data.code==1){
                    this.tip="登录成功"
                }
                // if(!!res.data.type){
                //     window.sessionStorage.userInfo = JSON.stringify({token:res.data.token});
                //     this.$router.push({name:'home'})//登录成功跳入首页
                // }
            })
        },
        rigister(){
            // console.log(this.obj)
            // console.log(axios)
                var that=this
                // console.log(this.name,this.tel,this.pwd)
                axios.post("http://192.168.52.94:8080/hanfugou/regist?name="+this.name+"&tel="+this.tel+"&pwd="+this.pwd,{name:this.name,tel:this.tel,pwd:this.pwd}).then(res=>{
                // console.log(res.data);
                console.log(that)
                if(res.data==1){
                    that.tip="手机号已经被注册"
                }
                 if(res.data==2){
                      that.tip="名称已被占用"
                }
                 if(res.data==3){
                      that.tip="注册成功"
                      that.name=""
                      that.tel=""
                      that.pwd=""
                      that.flag=true
                }
                 if(res.data==4){
                      that.tip="注册失败"
                }

                
            })
        }
    }
}
</script>

<style scoped>
.wrap{
    position: fixed;
    left:0.2rem;
    top: 0.4rem;
    right: 0.2rem;
    /* box-shadow: 10px 10px 5px #888888; */
}
 .foot{
     width: 100%;
     height: 2.5rem;
    margin-top: 0.9rem;
    text-align: center;
 }
 .btn_qq{
     float:left;
     margin-left: 1.1rem;
 }
 .btn_weibo{
     float: left;
       margin-left:1.1rem;
 }
  .f_white{
      font-size: 0.3rem;
      color: black
  }
  .foot2 img{
      width:48%;
      float: left; 
    padding-top: 0.5rem;
    padding-left: 0.5rem;
    vertical-align: middle;
  }
   .tip{
        padding-top: 0.2rem;
        color: #555;
        font-size: 0.4rem;
    }
    .tip span{
        color: red
    }
  
</style>
  

>>>>>>> c1007291843f9b9c0058cbdf3208670ecf119f53
