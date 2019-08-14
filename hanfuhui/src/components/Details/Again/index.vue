<template>
     <div class="again">
        <span class="look">瞅了又瞅</span>
        <div class="pic_wrap">
            <div class="pic">
                <img src="https://pic.hanfugou.com/web/2019/6/13/19/696ef876e84e46d4821dcc7ca18d53a3.jpg_300x300.jpg" alt="" style="width: 2.4rem;height:2.4rem;">
                <span class="desc">
                    【呦呦鹿鸣】（鹿鸣斗篷）原创传统汉服斗篷刺绣加绒中长款冬季红
                </span>
                <div class="price">
                    ¥<span>199.00</span>
                </div>
            </div>
            <div class="pic">
                <img src="https://pic.hanfugou.com/web/2019/6/13/19/696ef876e84e46d4821dcc7ca18d53a3.jpg_300x300.jpg" alt="" style="width: 2.4rem;height:2.4rem;">
                <span class="desc">
                    【呦呦鹿鸣】（鹿鸣斗篷）原创传统汉服斗篷刺绣加绒中长款冬季红
                </span>
                <div class="price">
                    ¥<span>199.00</span>
                </div>
            </div>
            <div class="pic">
                <img src="https://pic.hanfugou.com/web/2019/6/13/19/696ef876e84e46d4821dcc7ca18d53a3.jpg_300x300.jpg" alt="" style="width: 2.4rem;height:2.4rem;">
                <span class="desc">
                    【呦呦鹿鸣】（鹿鸣斗篷）原创传统汉服斗篷刺绣加绒中长款冬季红
                </span>
                <div class="price">
                    ¥<span>199.00</span>
                </div>
            </div>
            <div class="pic">
                <img src="https://pic.hanfugou.com/web/2019/6/13/19/696ef876e84e46d4821dcc7ca18d53a3.jpg_300x300.jpg" alt="" style="width: 2.4rem;height:2.4rem;">
                <span class="desc">
                    【呦呦鹿鸣】（鹿鸣斗篷）原创传统汉服斗篷刺绣加绒中长款冬季红
                </span>
                <div class="price">
                    ¥<span>199.00</span>
                </div>
            </div>
            <div class="pic">
                <img src="https://pic.hanfugou.com/web/2019/6/13/19/696ef876e84e46d4821dcc7ca18d53a3.jpg_300x300.jpg" alt="" style="width: 2.4rem;height:2.4rem;">
                <span class="desc">
                    【呦呦鹿鸣】（鹿鸣斗篷）原创传统汉服斗篷刺绣加绒中长款冬季红
                </span>
                <div class="price">
                    ¥<span>199.00</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Again"
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