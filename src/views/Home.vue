<template>
 <YuniContent pNum='20'>
  <div class="home">
    <div class='page-title'>关于 Yuni UI</div>
    <div class='yun-doc'>
      Yuni UI 是基于vue2.x的个人开发的UI组件库，主要用于存储个人的日常的使用组件
    </div>
    <div class='page-title'>安装</div>
    <div class='yuni-code' v-highlight>
      <pre class='yuni-pre'>
          <code>
npm install yuni-ui --save

//main.js引入
import Yuni from 'yuni-ui'
import 'yuni-ui/lib/yuni.css'
Vue.use(Yuni)
          </code>
      </pre>
    </div>
  </div>
 </YuniContent>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
};
</script>
<style lang="scss" scoped>
.yun-doc{
  padding:15px 0;
}
</style>
