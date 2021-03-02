import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue'),
  },
  {
    path: '/button',
    name: 'button',
    component: () => import(/* webpackChunkName: "button" */ '@/views/Button.vue'),
    
  },
  {
    path: '/input',
    name: 'input',
    component: () => import(/* webpackChunkName: "input" */ '@/views/Input.vue'),
    
  },
  {
    path: '/animate',
    name: 'animate',
    component: () => import(/* webpackChunkName: "input" */ '@/views/Animate.vue'),
    
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: () => import(/* webpackChunkName: "scroll" */ '@/views/Scroll.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
