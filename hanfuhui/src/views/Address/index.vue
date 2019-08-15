<template>
    <div class="wrap">
        
      <input type="text" placeholder="收件人">
       <input type="text" placeholder="联系电话">
        <select class="city">
                <option value="">请选择</option>
                <option value="">dd</option>
                <option value="">dds</option>
        </select>
        <select class="xian">
                <option value="">请选择市</option>
                <option value="">dd</option>
                <option value="">dds</option>
        </select>
           <select class="qu">
                <option value="">请选择县/区</option>
                <option value="">dd</option>
                <option value="">dds</option>
        </select>
         <input type="text" placeholder="详细地址">
       <div class="set" @click="change">
           <img :src="def_address?url1:url2" alt="" style="width:0.4rem;height:0.4rem;">
           <span>设为默认地址</span>
       </div>
      <div class="save">
          <img src="https://m.hanfugou.com/Image/icon_right_white.png?v=1" alt="" style="width:0.5rem;height:0.4rem;">
          <span>保存更改</span>
      </div>
    </div>
</template>
<script>
export default {
    name:"Address",
    data(){
        return{
            def_address:true,
            url1:"https://m.hanfugou.com/Image/check_no.png?v=1",
            url2:"https://m.hanfugou.com/Image/check_yes.png?v=1"
        }
    },
    methods:{
        change(){
            this.def_address=!this.def_address
        }
    }
}
</script>
<style scoped>
    .wrap{
        display: flex;
        flex-direction: column;
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