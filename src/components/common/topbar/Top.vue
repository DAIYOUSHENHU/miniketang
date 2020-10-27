<template>
<div>
  <TopBar>
    <div slot="left"><img id="leftimg" src="@/assets/img/miniketang.jpg" alt=""></div>
    <div slot="msg"><i class="el-icon-message-solid">消息</i></div>
    <div slot="masterimg"><img id="masterimg" src="@/assets/img/userImg.jpg" alt=""></div>
    <div slot="mastername">
      <el-dropdown>
        <span style="font-size: 16px">谢林宸</span>
        <el-dropdown-menu>
          <el-dropdown-item>切换至普通用户</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </TopBar>
</div>
</template>

<script>
import TopBar from './TopBar'

import {
  getMasterInfo
} from '@/network/masterindex'
export default {
  name: 'Topbar',
  data() {
    return {
      MasterInfo: null,
    }
  },
  components: {
    TopBar,
  },
  created() {
    getMasterInfo().then(res => {
      console.log(res);
      this.MasterInfo = res
    })
  }
}
</script>

<style>
#leftimg {
  width: 100%;
  height: 44px;
}

#masterimg {
  width: 100%;
  height: 44px;
}
</style>
