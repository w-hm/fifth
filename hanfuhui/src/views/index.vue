<template>
  <div class="wrap">
      <div class="wBox">
            <Header></Header>

            <Classify></Classify>  

            <Navlist></Navlist>

             <Today></Today>

              <Fzan></Fzan>

              <Chuan></Chuan>

               <Hanfu></Hanfu>

               <Feature></Feature>
               <Hotsale></Hotsale>
               <Cute></Cute>
      </div>
              <TabBar></TabBar>            
    <div class="footer_box"></div>   
</div>    
</template>
<script>

import Header from "@/components/First/Header"
import Classify from "@/components/First/Classify"
import Navlist from "@/components/First/Navlist"
import Today from "@/components/First/Today"
import Fzan from "@/components/First/Fzan"
import Chuan from "@/components/First/Chuan"
import Hanfu from "@/components/First/Hanfu"
import Feature from "@/components/First/Feature"
import Hotsale from "@/components/First/Hotsale"
import Cute from "@/components/First/Cute"
import TabBar from "@/components/First/TabBar"
export default {
  name: "index",
  components:{
      Fzan,
      Chuan,
      Hanfu,
      Header,
      Classify,
      Navlist,
      Today,
      TabBar ,
      Feature,
      Hotsale,
      Cute
  },
};
</script>
<style lang="css" scoped>
.wrap{
    display: flex;
    flex-direction: column;
    justify-content: space-between;   
}
.wBox{
   display: flex;
   flex-direction: column;
  
}
.footer_box{
    width: 100%;
    height: 1.1rem;
}
</style>

