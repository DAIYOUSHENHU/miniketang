<template>
<div>
  <el-container style="height: 700px;solid #eee">
    <el-aside id="AsideSty" width="220px">
      <div style="height: 80px"></div>
      <el-menu :default-openeds="[]" @select="handleSelect">
        <el-menu-item index="0">
          <template slot="title" style="color: red;"><i class="el-icon-view"></i>
            <router-link to="/">首页</router-link>
          </template>
        </el-menu-item>

        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i>用户管理</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link to="/users/students">学生管理</router-link>

            </el-menu-item>
            <el-menu-item index="1-2">讲师管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>权限管理</template>
          <el-menu-item-group>
            <el-menu-item index="2-1">讲师认证</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"><i class="el-icon-menu"></i>课程管理</template>
          <el-menu-item-group>
            <el-menu-item index="3-1">课程分类</el-menu-item>
            <el-menu-item index="3-2">课程审核</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title"><i class="el-icon-menu"></i>订单管理</template>
          <el-menu-item-group>
            <el-menu-item index="4-1">查看订单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </el-container>
</div>
</template>

<script>
export default {
  name: 'Aside',
  data() {
    return {
      cid: '',
    }
  },
  methods: {
    handleSelect(key) {
      this.cid = key
      this.$emit('indexSelect', this.cid)

    }
  },
}
</script>

<style>
#AsideSty {
  background-color: #fff;
}

a {
  font-size: 14px;
  color: red;
  text-decoration: none;
}
</style>
