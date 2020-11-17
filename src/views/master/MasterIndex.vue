<template>
<div>
  <Top></Top>
  <div style="height: 3px"></div>
  <el-container>
    <Aside></Aside>
    <el-container>
      <el-main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>     
      </el-main>
    </el-container>
  </el-container>
  <Foot></Foot>
</div>
</template>

<script>
import Top from '@/components/common/topbar/Top'
import Aside from '@/components/common/aside/Aside'
import Foot from '@/components/common/foot/Foot'

export default {
  name: 'MasterIndex',
  data() {
    return {
      cpsIndex: '0',
      trace: "首页",

    }
  },
  methods: {

  },
  computed: {

  },
  components: {
    Top,
    Aside,
    Foot,
  },

}
</script>

<style>
Aside {
  background-color: #555555;
  color: white;
}
</style>
