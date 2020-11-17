<template>
<div>
  <div id="searchLecSty" style="" border>
    <el-input @keyup.enter.native="searchClick(lecid)" placeholder="通过编号搜索..." prefix-icon="el-icon-search" size="small" style="width: 400px;margin-right: 10px" v-model="lecid">
    </el-input>
    <el-button size="small" type="primary" icon="el-icon-search" @click="searchClick(lecid)">搜索</el-button>
  </div>
</div>
</template>

<script>
import bus from '@/components/eventBus/eventBus'
export default {
  name: 'SearchLec',
  data() {
    return {
      lecid: '',
    }
  },
  methods: {
    searchClick(id) {
      bus.$emit("getlecid",id);
    }
  }
}
</script>

<style>
#searchLecSty {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center
}
</style>
