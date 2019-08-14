<template>
    <div class="wrap">
        <div class="head">
            欢迎您:<span>{{username}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:"Shoppingcart",
    data:function(){
        return {
            username:""
        }
    },
    methods:{

    },
    mounted:function(){
        // console.log(this.username)
        // if(!this.username){
        //     this.$router.push("/Mine")
        // }
    }
    
}
</script>
<style scoped>

</style>