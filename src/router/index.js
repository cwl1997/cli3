import Vue from "vue";
import VueRouter from "vue-router";
import Login from '@/system/login';
import Container from '@/Container/container'
import Dashboard from '@/views/dashboard'
import Article from '@/views/article'

Vue.use(VueRouter);

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
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
