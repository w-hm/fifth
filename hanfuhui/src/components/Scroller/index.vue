<template>
    <div class="wrapper" ref="picWrapper">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
    name:"Scroller",
    mounted(){
           this.$nextTick(() => {
                this.personScroll();
        });
    },
    methods:{
          personScroll() {
            this.$nextTick(() => {
                if (!this.scroll) {
                  this.scroll = new BScroll(this.$refs.picWrapper, {
                    startX: 0,
                    click: true,
                    scrollX: true,
                    scrollY: false,
                    eventPassthrough: "vertical"
                  });
                }else{
                    this.scroll.refresh()
                }
            });
    }
    }

}
</script>
<style scoped>
    .wrapper{
        height: 100%;
    }
</style>