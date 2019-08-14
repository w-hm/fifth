<template>
    <div class="wrap">
        <div class="header_box"></div>
            <Header></Header>
                <Content></Content>             
                    <Pay></Pay>
                    <Comment></Comment>
                    <Des></Des>
                      <Shows></Shows>
                    <Again></Again>

            <TabBar></TabBar>
        <div class="tab_box"></div>
    </div>
</template>
<script>
import Header from "@/components/Details/Header"
import TabBar from "@/components/Details/TabBar"
import Content from "@/components/Details/Content"
import Pay from "@/components/Details/Pay"
import Comment from "@/components/Details/Comment"
import Des from "@/components/Details/Des"
import Shows from "@/components/Details/Shows"
import Again from "@/components/Details/Again"
export default {
    name:"Details",
    components:{
        Header,
        TabBar,
        Content,
        Pay,
        Comment,
        Des,
        Shows,
        Again
    }  ,
    mounted(){
       console.log(this.$route)
    }    
}
</script>
<style scoped>
    .tab_box{
        width: 100%;
        height:1.33rem;
    }
    .header_box{
        width: 100%;
        height:1.32rem;
        
    }
   .wrap{
       display: flex;
       flex-direction: column;
   }

    
</style>