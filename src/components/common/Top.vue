<template>
<div>

  <el-row style="background: #d3dce6">
    <el-col :span="4" justify="center">
      <div>
        <div>
          <el-image style="width: 200px; height: 100px" :src="src"></el-image>
        </div>
      </div>
    </el-col>
    <el-col :span="4" :offset="8" justify="center">
      <div class="grid-content bg-purple">
        <div>
          <span style="font-size: 50px;text-align: center">消息</span>
        </div>
      </div>
    </el-col>
    <el-col :span="4">
      <div>
        <div>
          <el-image style="width: 200px; height: 100px" :src="usersrc"></el-image>
        </div>
      </div>
    </el-col>
    <el-col :span="4">
      <div style="text-align: left">
        <div>
          <el-dropdown>
            <span style="font-size: 100px">xlc</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>切换至普通用户</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>

          </el-dropdown>
        </div>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'Top',
  data() {
    return {
      src: require("../../assets/miniketang.jpg"),
      usersrc: require("../../assets/userImg.jpg")
    }
  },
}
</script>

<style>
.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple {
  background: #d3dce6;
}
</style>
