import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('@/views/master/index/Index.vue')
const Students = () => import('../views/master/users/students/Students.vue')
const Lecturers = () => import('@/views/master/users/lecturers/Lecturers.vue')
const Permission = () => import('@/views/master/permission/Permission')
const Classify = () => import('@/views/master/courses/classify/Classify')
const Orders = () => import('@/views/master/orders/Orders')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index', 
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
    path: '/users/lecturers',
    name: 'Lecturers',
    component: Lecturers,
    meta: {
      title: '教师管理'
    }
  },
  {
    path: '/permission',
    name: 'Permission',
    component: Permission,
    meta: {
      title: '教师认证'
    }
  },
  {
    path: '/courses/classify',
    name: 'Classify',
    component: Classify,
    meta: {
      title: '课程分类'
    }
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    meta: {
      title: '教师认证'
    }
  },
  
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