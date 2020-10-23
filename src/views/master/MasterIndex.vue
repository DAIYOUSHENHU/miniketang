<template>
<div>
  <Top></Top>
  <div style="height: 3px"></div>
  <el-container>
    <Aside @indexSelect="whichcps"></Aside>
    <el-container>
      <el-header style="text-align: left; font-size: 22px; height: 80px;margin-top: 1px">
        <p style="height: 80px;margin-top: 10px;height: 50px">{{trace}}</p>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  <Foot></Foot>
</div>
</template>

<script>
import Top from '../../components/common/topbar/Top'
import Aside from '../../components/common/aside/Aside'
import Foot from '../../components/common/foot/Foot'

import Index from './index/Index'
import Students from './users/students/Students'
import Lecturers from './users/lecturers/Lecturers'
import Permission from './permission/Permission'
import Order from './orders/Order'
import Classify from './courses/classify/Classify'

export default {
  name: 'MasterIndex',
  data() {
    return {
      cpsIndex: '0',
      trace: "首页"
    }
  },
  methods: {
    whichcps(key) {
      this.cpsIndex = key
      if (key === "0") {
        this.trace = "首页"
      } else if (key === "1-1") {
        this.trace = "用户管理 > 学生管理"
      } else if (key === "1-2") {
        this.trace = "用户管理 > 讲师管理"
      } else if (key === "2-1") {
        this.trace = "权限管理 > 讲师认证"
      } else if (key === "3-1") {
        this.trace = "课程管理 > 课程分类"
      } else if (key === "3-2") {
        this.trace = "课程管理 > 课程审核"
      } else if (key === "4-1") {
        this.trace = "订单管理 > 查看订单"
      }
      console.log(this.cpsIndex)
    }
  },
  computed: {

  },
  components: {
    Top,
    Aside,
    Foot,

    Index,
    Students,

    Lecturers,
    Permission,
    Order,
    Classify,

  }
}
</script>

<style>
Aside {
  background-color: #555555;
  color: white;
}
</style>
