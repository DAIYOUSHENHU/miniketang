import Vue from 'vue'
import VueRouter from 'vue-router'


const About = () => import('../components/About.vue')
const Login = () => import('../views/Login.vue')
const Logon = () => import('../views/Logon.vue')
const User = () => import('../components/User.vue')

const Index = () => import('../views/master/index/Index.vue')
const Students = () => import('../views/master/users/students/Students.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    component: Index,
    meta: {
      title: '管理员界面'
    },
  },
  {
    path: '/users/students',
    name: 'Students',
    component: Students,
    meta: {
      title: '学生管理'
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