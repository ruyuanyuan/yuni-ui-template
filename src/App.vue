<template>
  <div id="app">
    <YuniHeader :fixedScroll="100">
      <div class='mp-header'>
        <div class='logo'>
          YuniUI
        </div>
        <div class='mp-name'>与你同行,看视界多姿多彩</div>
      </div>
    </YuniHeader>
    <YuniContent padNum='0' displayType='flex'>
      <YuniMenu :menuList='menuList' :width='180' bgColor='#2196f3' mColor='#64b5f6' direction='vertical'></YuniMenu>
      <div class='pageview'>
        <router-view />
      </div>
    </YuniContent>
  </div>
</template>
<script>
import YuniHeader from "@/components/YuniHeader";
import YuniContent from "@/components/YuniContent";
import YuniMenu from "@/components/YuniMenu/YuniMenu";
export default {
  components: {
    YuniHeader,
    YuniContent,
    YuniMenu,
  },
  data(){
    return {
      menuList:[
        {
          icon:require('@/assets/img1.png'),
          name:"介绍",
          route:'/home'
        },
        {
          icon:require('@/assets/img1.png'),
          name:"按钮",
          route:'/button'
        },
        {
          icon:require('@/assets/img1.png'),
          name:"输入框",
          route:'/input'
        },
        {
          icon:require('@/assets/img1.png'),
          name:"动画",
          route:'/animate'
        },
        {
          icon:require('@/assets/img1.png'),
          name:"滚动",
          route:'/scroll'
        },
      ]
    }
  }
};
</script>
<style lang="scss">
.mp-header{
  width:100%;
  height:60px;
  display: flex;
  align-items: center;
  .logo{
    font-size:24px;
  }
  .mp-name{
    margin-left: 40px;
    font-size: 18px;
  }
}
.pageview{
  flex:1;
}
</style>
