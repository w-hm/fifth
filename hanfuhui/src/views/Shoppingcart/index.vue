<template>
    <div class="wrap">
        <div class="head">
            欢迎您:<span>{{username}}</span>
        </div>
        <div class="main">
            <div class="goods"  v-for="(item,index) in data" :key="index">
                <div class="radio" :class="{cssred:flag}" v-on:click="show"></div>
               <div class="img"><img :src="item.shoppingimg" alt=""></div>
               <div class="box">
                   <p>{{item.shoppingStoreName}}<span v-on:click="del(item,index)">删除</span></p>
                   <p>{{item.shoppingName}}</p>
                   <div class="bt">
                       <span>￥{{item.shoppingPrice}}</span><button v-on:click="down(item,index)">-</button><div class="num">{{item.shoppingNum}}</div><button v-on:click="add(item,index)">+</button>
                   </div>
               </div>
            </div>
        </div>
        <div class="foot">
            <div class="radio"></div>
            <p>全选</p>
            <p>共计</p>
            <div class="bon">
                结算
            </div>
        </div>
    </div>
</template>
<script>
let axios=require("axios")
export default {
    name:"Shoppingcart",
    data:function(){
        return {
            
            username:"",
            data:"",
            flag:false
        }
    },
    methods:{
        show(){},
        del(item,index){
            let userid=sessionStorage.userid;
            let username=sessionStorage.username;

            console.log(userid,item.shoppingId)
        let that=this
        axios.post("http://192.168.52.94:8080/hanfugou/DeleteShopping?shoppingUserId="+userid+"&shoppingIds="+item.shoppingId).then((res)=>{
        console.log(res.data)
        if(res.data){
            console.log(that.data)
            that.data.splice(index,1)
        }
        // console.log(that)
        // that._data.data=res.data
    })
        },
        down(item,index){
            if(this.data[index].shoppingNum==1){
                return
            }
            let that=this;
            let userid=sessionStorage.userid;
            let username=sessionStorage.username;
            console.log(userid,item.shoppingId)
        axios.post("http://192.168.52.94:8080//hanfugou/minusShoppingNum?shoppingId="+item.shoppingId+"&shoppingUserId="+userid).then((res)=>{
        // console.log(res.data)
        // that._data.data=res.data
         if(res.data){
            that.data[index].shoppingNum--
        }
    })
        },
        add(item,index){
            let userid=sessionStorage.userid;
            let username=sessionStorage.username;
            console.log(userid,item.shoppingId)

            let that=this
        axios.post("http://192.168.52.94:8080//hanfugou/addShoppingNum?shoppingId="+item.shoppingId+"&shoppingUserId="+userid ).then((res)=>{
        console.log(res.data)
        // console.log(item,index)
        if(res.data){
            that.data[index].shoppingNum++
        }
        // that._data.data=res.data
    })
        }

    },
    mounted:function(){
        let userid=sessionStorage.userid;
        let username=sessionStorage.username;

        // console.log(userid)
        this.username=username
        if(!this.username){
            this.$router.push("/Mine")
        }
        let that=this
    axios.post("http://192.168.52.94:8080/hanfugou/ShowShopping?shoppingUserId="+userid).then((res)=>{
        console.log(res.data)
        // console.log(that)
        that._data.data=res.data
    })
    }
    
}
</script>
<style scoped>
.flag{
    background: red;
}
.wrap{
    background: white;
}
.head{
    padding: 0.3rem;
    border-bottom: 1px #dedede solid;
    background: #fcfcfc;

}
.head span{
    color: aqua;
    padding-left:0.2rem ;
    font-size: 0.4rem;
}
.main .goods{
    display: flex;
    /* border: 1px solid #000; */
    box-shadow: 1px 1px 5px grey;
    height: 2.5rem;
    /* padding-right: 0.2rem; */
    position: relative;
    margin-bottom: 0.2rem;
}
.main .goods .radio{
    width: 0.5rem;
    height: 0.5rem;
    border: 1px solid black;
    border-radius: 50%;
    position: absolute;
    left:0.2rem;
    top: 0;
    bottom:0;
    margin: auto;
}
.main .goods .img{
    width: 1.5rem;
    height: 1.5rem;
    /* border: 1px solid black; */
    position: absolute;
    left: 1rem;
    top:0;
    bottom:0;
    margin: auto;
}
.main .goods .img img{
    width: 100%;
    
}
.main .goods .box{
    padding-right: 0.2rem;
    /* border: 1px solid black; */
    width: 4.8rem;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
}
.main .goods .box p span{
    float: right
}
.main .goods .box p:nth-child(2){
    font-size: 0.3rem;
    border: 1px solid #ccc;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0.3rem 0;
}
.main .goods .box  button{
    width: 0.5rem;
    height: 0.5rem;
    float: right;
    font-size: 0.4rem;
}

.bt span{
    font-size: 0.4rem;
    color: #ff4466;
}
.main .goods .box  .num{
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    float: right;
    text-align: center;
    line-height: 0.5rem;
}
.foot{
    background: white;
    display: flex;
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 1rem;
}
.foot .radio{
    /* display: inline; */
    /* line-height: 1rem; */
    margin: 0.2rem;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    border: 1px solid black
}
.foot p{

}
.foot .bon{
    position: absolute;
    right: 0;
    width: 30%;
    height: 100%;
    background: grey;
    border-radius: 5%;
    text-align: center;
    line-height: 1rem;
    color: white;
    font-size: 0.3rem;
    /* height:1rem;    */
}
</style>