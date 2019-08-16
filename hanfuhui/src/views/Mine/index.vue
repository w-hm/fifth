<template>
    <div  class="wrap">
       <div v-if="show">
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


       <div v-else>
              <div class="u_head">
        <img class="head" src="http://pic.hanfugou.com/web/2019/8/10/9/886c642a23684335bf1b572666d65702.png_150x150.jpg" alt="" />
        <p>{{username}}</p>
        <button v-on:click="goout">注销账户</button>
    </div>
<div class="aa">
    <router-link to="/first">
          <div class="bb">  
          <span class="left">我的订单</span>
          <span class="right">查看全部订单></span>    
        </div></router-link>
</div>
    <ul id="ul">
             <router-link to="/first"><li><img src="https://m.hanfugou.com/Image/icon_orders_add.png?v=2" alt=""><h5>待付款</h5></li></router-link>
             <router-link to="/first"><li><img src="https://m.hanfugou.com/Image/icon_orders_pay.png?v=2" alt=""><h5>待发货</h5></li></router-link>
             <router-link to="/first"><li><img src="https://m.hanfugou.com/Image/icon_orders_ship.png?v=2" alt=""><h5>待收货</h5></li></router-link>
             <router-link to="/first"><li><img src="https://m.hanfugou.com/Image/icon_orders_refund.png?v=2" alt=""><h5>退款/售后</h5></li></router-link>
        </ul>
   <ol id="ol" >
            <li><img src="https://m.hanfugou.com/Image/icon_u_save.png?v=3" alt=""><h5>我的种草</h5></li>
            <li><img src="https://m.hanfugou.com/Image/icon_u_atte.png?v=3" alt=""><h5>关注店铺</h5></li>
            <li><img src="https://m.hanfugou.com/Image/icon_u_fleas.png?v=3" alt=""><h5>我的二手</h5></li>
            <li><img src="https://m.hanfugou.com/Image/icon_u_address.png?v=3" alt=""><h5>收货地址</h5></li>
            <li><img src="https://m.hanfugou.com/Image/icon_u_cart.png?v=1" alt=""><h5>购物车</h5></li>
            <li><img src="https://m.hanfugou.com/Image/icon_u_voucher.png?v=3" alt=""><h5>代金券</h5></li>
     </ol>
   
       </div>
          
    </div>
</template>


<script>
var axios = require("axios")
export default {
    data(){
        return {
            show:true,
            selected:"login",  
            tel:"13407140934",
            pwd:"814892235",
            name:"",
            tip:"",
            flag:"",
            username:""
           
        }
    },
    created:function(){
       var username=sessionStorage.username
       this.username=username;
        // console.log(this.username)
        this.username=username
        // console.log(this.username)
        if(!this.username){
            this.tip="请先登录"
        }else{
            this.show=false
        }
    },
    methods:{
        goout(){
            sessionStorage.username=""
            sessionStorage.token=""
            sessionStorage.userid=""
            // location.reload()
            this.$router.push({ path:'/first'  })
        },
        login(){
            if(!this.tel){
                this.tip="账号不能为空"
                return
            }
            // console.log(this.loginInfo)
            
            axios.post("/hanfugou/login?tel="+this.tel+"&pwd="+this.pwd)
            .then(res=>{
                // console.log(res.data);
                
                console.log(res.data)
                if(res.data.code==3){
                    this.tip="用户名与密码不匹配"
                }
                if(res.data.code==2){
                    this.tip="用户名不存在"
                    
                }
                if(res.data.code==1){

                    this.tip="登录成功"
                    sessionStorage.username=res.data.userName
                    sessionStorage.token=res.data.token
                    sessionStorage.userid=res.data.userId
                    this.show=false
                    this.username=sessionStorage.username
                    console.log(this)

                    
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





    .u_head {
    width: 100%;
    background: #ff4466;
    height: 2.5rem;
     overflow: hidden;
}  
   .u_head button{
       /* width: 2rem;
  
       height: 0.3rem;
       text-align: center; */
       font-size: 0.3rem;
   } 
    
  .u_head img{
     border-radius: 50%;
     width:20%;
     margin: auto;
     margin-top: 0.2rem;
  }
  .u_head p{
      text-align: center;
      color: rgba(240, 248, 255, 0.829);
  }
  .bb{
      width: 100%;
      height: 1.2rem;
      background:aliceblue;
      margin-top: 0.1rem;
      font-size: 0.25rem;
      color: dimgray;
  }
  .bb .right{
      float: right;
      text-align: center;
      line-height:1.2rem; 
      margin-right:0.2rem;
      color: black;
  }
  .bb .left{
      float: left;
      text-align: center;
      line-height:1.2rem; 
      margin-left: 0.2rem;
      color:black;
  }
 
 #ul{
    display: flex;
    justify-content: space-around;
    background: white;
}
#ul li{
    padding-top: 0.1rem;
    width: 1rem;
    text-align: center;
    font-size: 0.22rem;
    color: darkslategray;
}
#ul li img{
    width: 100%;
    /* height: 100%; */
}

 #ol{
     width: 100%;
     /* width: 7.5rem; */
    display: flex;
    /* justify-content: space-around; */
    flex-wrap: wrap;
    margin-top: 0.15rem;
   background: white;
}
#ol>li{
    width:25% !important;
    padding-top: 0.5rem;
    width: 1rem;
    text-align: center;
    color: dimgray;
    font-size: 0.26rem;
}
#ol li img{
    display: inline;
    width: 50%;
}
#ul h4{
     margin-top: 0.04rem;
     font-size: 0.25rem;
}
 #ol h4{
     margin-top: 0.04rem;
     font-size: 0.3rem;
 }

  
</style>
  
