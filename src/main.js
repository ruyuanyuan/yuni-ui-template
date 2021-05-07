import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/public.css';

import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/monokai-sublime.css'

import Yuni from 'yuni-ui'
import 'yuni-ui/lib/yuni.css'
Vue.use(Yuni)
Vue.config.productionTip = false;
Vue.directive('highlight',function (el) {
  let highlight = el.querySelectorAll('pre code');
  highlight.forEach((block)=>{
      hljs.highlightBlock(block)
  })
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
