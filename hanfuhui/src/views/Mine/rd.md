<template class="wrap">
    <div>
        <Head title="登录&&注册" :show="true"></Head>
        <mt-navbar v-model="selected">
            <mt-tab-item id="login">登录</mt-tab-item>
            <mt-tab-item id="register">注册</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="login">
                 <mt-field label="用户名" placeholder="请输入用户名" v-model="tel"></mt-field>
                 <mt-field label="密码" placeholder="请输入密码" type="password" v-model="pwd"></mt-field>
                 <mt-button type="primary" size="large" @click="login()">登录</mt-button>
            </mt-tab-container-item>
            <mt-tab-container-item id="register">
                 <mt-field label="用户名" placeholder="请输入用户名" v-model="name"></mt-field>
                 <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="tel"></mt-field>
                 <mt-field label="密码" placeholder="请输入密码" type="password" v-model="pwd"></mt-field>
                 <mt-button type="danger" size="large" @click="rigister">注册</mt-button>
            </mt-tab-container-item>
        </mt-tab-container>
        <div class="tip">
            提示信息:<span>{{tip}}</span>
        </div>
    </div>
</template>


<script>
var axios = require("axios")
export default {
    data(){
        return {
            selected:"login",
            loginInfo:{},
            rigisterInfo:{},
        
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
                      taht.pwd=""
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
        font-size: 0.5rem;
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