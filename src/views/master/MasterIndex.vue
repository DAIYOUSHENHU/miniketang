<template>
<div>
  <Top></Top>
  <el-container>
    <Aside @indexSelect="whichcps"></Aside>
    <el-container>
      <el-header style="text-align: left; font-size: 20px">
        <span>{{trace}}</span>
      </el-header>

      <el-main>
        <div v-if="cpsIndex==='0'">
          <Index></Index>
        </div>

        <div v-if="cpsIndex==='1-1'">
          <Students></Students>
        </div>

        <div v-if="cpsIndex==='1-2'">
          <Lecturers></Lecturers>
        </div>

        <div v-if="cpsIndex==='2-1'">
          <Permission></Permission>
        </div>

        <div v-if="cpsIndex==='3-1'">
          <Classify></Classify>
        </div>

        <div v-if="cpsIndex==='3-2'">

        </div>

        <div v-if="cpsIndex==='4-1'">
          <Order></Order>
        </div>

      </el-main>
    </el-container>
  </el-container>
  <Foot></Foot>
</div>
</template>

<script>
import NavMenu from '../.././components/common/Navmenu'
import Top from '../.././components/common/Top'
import Aside from '../../components/common/Aside'
import Index from './index/Index'
import Students from './users/students/Students'
import Foot from '../../components/common/Foot'
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
    NavMenu,
    Top,
    Aside,
    Index,
    Students,
    Foot,
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
