<template>
    <div class='yuni-scroll' ref='yuniScroll'>
        <div class='yuni-scroll-cont' ref='yuniScrollCbox'>
            <div ref='yuniScrollCont'><slot></slot></div>
            <div v-html='cphtml'></div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        step:{
            type:[Number,String],
            default:1
        },
        
    },
    data(){
        return {
            tempInterval:null,
            cphtml:null,
            scrollT:0
        }
    },
    mounted(){
        this.$nextTick(()=>{
             this.cphtml = this.$refs.yuniScrollCont.innerHTML;
             this.tempInterval = setInterval(this.scrollEvent, 20);
        })
       
    },
    methods:{
        scrollEvent(){
            let boxH = this.$refs.yuniScrollCont.offsetHeight;
            console.log(boxH)
            if(Math.abs(this.scrollT)>= boxH){
               this.scrollT = 0 
            }
            this.scrollT-=2
            this.$refs.yuniScrollCbox.style.transform = "translateY(" + this.scrollT + "px)";
        }
    },
    computed:{

    },
    destroyed() {
        clearInterval(this.tempInterval);
    },
    
}
</script>
<style lang='scss' scoped>
    .yuni-scroll{
        height:300px;
        overflow: hidden;
    }
</style>