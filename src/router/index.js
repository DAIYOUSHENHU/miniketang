import Vue from 'vue'
import VueRouter from 'vue-router'


const Index = () => import('.././views/master/MasterIndex.vue')
const About = () => import('../components/About.vue')
const Login = () => import('../views/Login.vue')
const Logon = () => import('../views/Logon.vue')
const User = () => import('../components/User.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      title: '首页'
    },
    router
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path:'/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
    },
    children: [
      {
        path: 'logon',
        name: Logon,
        component: Logon,
        meta: {
          title: '注册'
        }
      },
    ]
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      title: '用户'
    },
    beforeEnter: (to, from, next) => {
      alert('请先登录')
      next('/login')
    }
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

router.beforeEach((to, from, next) => {
  document.title=to.meta.title
  next()
})

export default router