<template>
    <div class='yuni-scroll' :ref='`yuniScroll${scrollId}`' >
        <div class='yuni-scroll-cont' :class="{'scroll-inline':direction=='inline'}" :style='`height:${height}px;width:${scrollboxW}px`'  :ref='scrollId+"box"' @mouseenter="mouseEnterEvent" @mouseleave="mouseleaveEevent">
            <div :ref='scrollId+"cont"'><slot></slot></div>
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
        height:{
            type:[Number,String],
            default:300
        },
        direction:{
            type:String,
            default:'vertical' //inline
        },
        scrollId:{
            type:String,
            default:'scroll0'
        },
        
    },
    data(){
        return {
            tempInterval:null,
            cphtml:null,
            scrollT:0,
            scrollboxW:0,
            scrollboxH:0,
            moveTep:2,
            htmlshow:false,
        }
    },
    mounted(){
        this.$nextTick(()=>{
             this.cphtml = this.$refs[this.scrollId+'cont'].innerHTML;
             this.tempInterval = setInterval(this.scrollEvent, this.step);
             this.scrollboxW=this.$refs[`yuniScroll${this.scrollId}`].offsetWidth
        })
    },
    methods:{
        scrollEvent(){
            let boxH = this.$refs[this.scrollId+'cont'].offsetHeight;
            let boxW = this.$refs[this.scrollId+'cont'].offsetWidth;
            if(this.direction=='inline'){
                if(Math.abs(this.scrollT)>= boxW){
                    this.scrollT = 0 
                }
                this.scrollT-= this.moveTep
               
                this.$refs[this.scrollId+'box'].style.transform = "translateX(" + this.scrollT + "px)";
            }else{
                if(Math.abs(this.scrollT)>= boxH){
                    this.scrollT = 0 
                }
                this.scrollT-= this.moveTep
                this.$refs[this.scrollId+'box'].style.transform = "translateY(" + this.scrollT + "px)";
            }
            
        },
        mouseEnterEvent(){
             clearInterval(this.tempInterval);
        },
        mouseleaveEevent(){
            this.tempInterval = setInterval(this.scrollEvent, this.step);
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
        width: 100%;
        height:100%;
        overflow: hidden;
        .yuni-scroll-cont{
            width:100%;
        }
        .scroll-inline{
            width: 100%;
            display: flex;
        }
    }
</style>