<template>
    <YuniContent pNum='20'>
        <div class='yun-page'>
            <div class='page-title'>动画</div>
            <div class='page-content'>
                <YuniCard>
                    <YuniScroll>
                        <ul>
                            <li class='yun-li' v-for="i in 10" :key='i'>{{i}}</li>
                        </ul>
                    </YuniScroll>
                </YuniCard>
            </div>
        </div>
    </YuniContent>
</template>
<script>
// import YuniContent from "@/components/YuniContent";
// import YuniCard from '@/components/YuniCard';
// import YuniAnimate from '@/components/YuniAnimate';
import YuniScroll from '@/components/YuniScroll';
export default {
    components:{
        // YuniContent,
        // YuniCard
        YuniScroll
    }
}
</script>
<style lang="scss" scoped>
.yun-li{
    line-height: 40px;
    text-align: center;
    border:1px solid #dfdfdf;
}
</style>