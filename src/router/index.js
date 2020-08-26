import Vue from "vue";
import VueRouter from "vue-router";
import Login from '@/system/login';
import Container from '@/Container/container'
import Dashboard from '@/views/dashboard'
import Article from '@/views/article'
//pc测试
import pctest from '@/views/test/index'
import test from '@/views/test/test'
import echarts from "@/views/test/echarts"
import table from '@/views/test/table'
//移动端测试
import apptest from '@/views/apptest/index.vue'
import compoments from '@/views/apptest/components'
import area from '@/views/apptest/area'


Vue.use(VueRouter);

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Container',
    component: Container,
    children: [
      {path: 'dashboard', name: '首页', component: Dashboard, 
        children: [
          {path: 'dashboard1', name: '首页1', component: Dashboard,},
          {path: 'dashboard2', name: '首页2', component: Dashboard,
            children: [
              {path: 'dashboard21', name: '首页21', component: Dashboard,},
              {path: 'dashboard22', name: '首页22', component: Dashboard, },
            ] },
        ]
      },
      {path: 'article', name: '文章', component: Article, },
      {path: 'pctest', name: 'PC测试', component: pctest, 
        children:[
          {path:'test',name:"vuex",component:test},
          {path:'echarts',name:"echarts",component:echarts},
          {path:'table',name:"table测试",component:table}
        ]
        },
      {path: 'apptest', name: '移动端测试', component: apptest,
        children:[
          {path: 'compoments', name: '组件', component: compoments, },
          {path: 'area', name: '地区选择', component: area, },
        ]},
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
