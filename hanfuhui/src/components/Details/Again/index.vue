<template>
     <div class="again">
        <span class="look">瞅了又瞅</span>
        <div class="pic_wrap">
            <div class="pic" v-for="look of lookList" :key="look.id">
                <img :src="look.imgUrl" alt="" style="width: 2.4rem;height:2.4rem;">
                <span class="desc">
                    {{look.desc}}
                </span>
                <div class="price">
                    ¥<span>{{look.price.toFixed(2)}}</span>
                </div>
            </div>           
        </div>
    </div>
</template>
<script>
export default {
    name:"Again",
    data(){
        return {
            lookList:[
                {id:"1",desc:"【呦呦鹿鸣】（鹿鸣斗篷）原创传统汉服斗篷刺绣加绒中长款冬季红",price:188.88,imgUrl:"https://pic.hanfugou.com/web/2019/8/7/19/7daa5a2f82934dc2924054798e6775d5.jpg_300x300.jpg"},
                {id:"2",desc:"【星魂】纨素 烫银钉珠洒银亮片渐变星空齐胸齐腰 汉服华服",price:988.88,imgUrl:"https://pic.hanfugou.com/web/2019/5/22/16/5702389b7aab46fdbef12f88b699871b.jpg_300x300.jpg"},
                {id:"3",desc:"金陵往事:郁芙蓉 池夏原创改良汉服明制立领大袖6米摆马面裙 黛玉",price:888.88,imgUrl:"https://pic.hanfugou.com/web/2019/6/13/19/696ef876e84e46d4821dcc7ca18d53a3.jpg_300x300.jpg"},
                {id:"4",desc:"初夏:鹤语 池夏原创改良汉服汉元素 晋襦改良袴两件套 仙鹤印花",price:588.88,imgUrl:"https://pic.hanfugou.com/web/2019/6/13/19/190d27e7485f4c278f4ae6354097730f.jpg_300x300.jpg"},
                {id:"5",desc:"曼珠沙华:洛烬池夏原创设计 改良汉服立领对襟彼岸花提花短衫长衫",price:788.88,imgUrl:"https://pic.hanfugou.com/web/2019/6/13/19/58286e718edb49bcabd366eb5a8f5a75.jpg_300x300.jpg"},
                {id:"6",desc:"仑灵:桃儿 池夏原创设计改良交领齐腰襦裙套装桃花刺绣",price:666.66,imgUrl:"https://pic.hanfugou.com/web/2019/5/31/11/d17151c0e6e84a7f9d825ce8c71e7638.jpg_300x300.jpg"},
            ]
        }
    }
}
</script>
<style scoped>
    .again{
        margin:0.3rem 0;
        display: flex;
        flex-direction: column;
    }
    .again  .look{
        padding: 0.3rem;
        border-left: 8px solid #ff4466;
        color: grey;
        background-color: #fff;
    }
    .again .pic_wrap{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }
   .again  .pic{
       display: flex;
       flex-direction: column;
       width: 2.4rem;
       background-color: #fff;
       margin: 0 0.1rem 0.1rem 0;;
       
   }
   .again  .pic .desc{
       color: grey;
       font-size: 0.27rem;
       padding: 0.2rem ;
       white-space: nowrap;
       overflow: hidden;
       text-overflow: ellipsis;
   }
   .again  .pic .price{
       color:red;
       padding: 0 0.2rem 0.3rem;
       display: flex;
     align-items: center;
   }
   .again  .pic .price span{
       font-size: 0.35rem;
       padding-left: 0.1rem;
   }
</style>