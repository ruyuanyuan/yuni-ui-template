<template>
    <div class='yun-shape'>
        <template v-if="type=='rect'">
            <div class='yun-rect' :style='`width:${widthC}px;height:${heightC}px;border-radius:${radius}px;`'>
               <slot></slot>
            </div>
        </template>
        <template v-if="type=='trapezoid'">
            <div class='yun-trapezoid' :style='`width:${widthC}px;height:${heightC}px;border-radius:${radius}px;`'>
               <slot></slot>
            </div>
        </template>
    </div>
</template>
<script>
export default {
    name:'yunshape',
    props:{
        type:{
            type:String,
            default:'rect' //trapezoid circle egg ellipse parallelogram water-drop
        },
        width:{
            type:[String,Number],
            default:100
        },
        height:{
            type:[String,Number],
            default:100
        },
        radius:{
            type:String,
            default:'0'
        },
        size:{
            type:[String,Number],
            default:1
        },
       
    },
    computed:{
        widthC:function(){
            return Number(this.width)*Number(this.size)
        },
        heightC:function(){
            return Number(this.height)*Number(this.size)
        }
    },
    data(){
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
    .yun-rect{
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border:1px solid #ddd;
    }
</style>
