<template>
    <div class="wrap">
        
      <input type="text" placeholder="收件人" v-model="addressReceivePeople" ref="addressReceivePeople">
       <input type="number" placeholder="联系电话" v-model="addressTel" ref="addressTel">
        <select class="province" ref="province">
                <option value="">请选择</option>
                <option value="" >{{province}}</option>               
        </select>
        <select class="city" ref="city">
                <option value="">请选择市</option>
                <option value="" >{{city}}</option>
        </select>
           <select class="county" ref="county">
                <option value="">请选择县/区</option>
                <option value="" >{{county}}</option>
        </select>
         <input type="text" placeholder="详细地址" v-model="addressDetail" ref="addressDetail">
       <div class="set" @click="change">
           <img :src="def_address?url2:url1" alt="" style="width:0.4rem;height:0.4rem;">
           <span>设为默认地址</span>
       </div>
      <div class="save" @click="saveAddress">
          <img src="https://m.hanfugou.com/Image/icon_right_white.png?v=1" alt="" style="width:0.5rem;height:0.4rem;">
          <span>保存更改</span>
      </div>
      <div class="box" v-if="box">
          请填写完整信息哟～
      </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"Address",
    // inject:["reload"],
    data(){
        return{
            box:false,
            def_address:false,
            url1:"https://m.hanfugou.com/Image/check_no.png?v=1",
            url2:"https://m.hanfugou.com/Image/check_yes.png?v=1", 
            addressReceivePeople:"",
            addressTel:"",
            addressDetail:"",
            province:"湖北省",
            city:"武汉市",
            county:"江夏区",
        }
    },
    mounted(){
      
    //    console.log(this.$refs.city[1].text) 
    },
    methods:{
        change(){
            this.def_address=!this.def_address
        },

        saveAddress(){
            // this.reload()
            let all_address={
                userId:this.addressReceivePeople,
                Tel:this.addressTel,
                province:this.province,
                city:this.city,
                county:this.county,
                address:this.addressDetail,
            }
            axios.post("/hanfugou/addressInsert?userId="+sessionStorage.userid+"&addressReceivePeople="+this.addressReceivePeople+"&addressTel="+this.addressTel+"&addressXxaddress="+this.province+this.city+this.county+this.addressDetail,{}).then((res)=>{
                console.log(res);             
                    sessionStorage.setItem("all_address",JSON.stringify(all_address))        
            })
        setTimeout(()=>{
            if(this.$refs.addressReceivePeople.value&&this.$refs.addressTel.value&&this.$refs.addressDetail.value!==""){
                this.$router.push({path:"/orderList"})
            }else{ 
                this.box=true
                setTimeout(()=>{
                    this.box=false
                },1000)
            }
           
            },1000)
          
        }

    }
}
</script>
<style scoped>
    .wrap{
        display: flex;
        flex-direction: column;
    }
    .wrap .box{
        width: 4rem;
        height: 2rem;
        background:rgba(0,0,0,0.4);
        position: fixed;
        left: 50%;
        top: 50%;
        margin-top: -1rem;
        margin-left: -2rem;
        color: white;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
      .wrap input{
          border: 0;
        height: 1rem;
        font-size: 0.35rem;
        border-bottom:1px solid lightgray;
        background-color: #fff;
        padding: 0 0.2rem;
        outline: none；
    }
    .wrap select{
        border: 0;
        height: 1rem;
        font-size: 0.35rem;
        border-bottom:1px solid lightgray;
        background-color: #fff;
        padding: 0 0.2rem;
        color: grey;
        outline: none；
    }
    .wrap .set{
        display: flex;
        padding:0.3rem 0.2rem;
        background-color: #fff;
    }
    .wrap .set span{
        padding-left:0.2rem; 
        color: grey;
    }
    .wrap .save{
        background-color: #ff4466;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        height: 1.2rem;
        justify-content: center;
        align-items: center;
    }
    .wrap .save span{
        color: white;
        padding-left: 0.2rem;
    }
</style>