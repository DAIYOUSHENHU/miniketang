<template>
<div>
  <div id="searchLecSty" style="" border>
    <el-input @keyup.enter.native="searchClick" placeholder="通过姓名或编号搜索..." prefix-icon="el-icon-search" size="small" style="width: 400px;margin-right: 10px" v-model="keywords">
    </el-input>
    <el-button size="small" type="primary" icon="el-icon-search" @click="searchClick">搜索</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'SearchPer',
  data() {
    return {
      keywords: '',
      cardLoading: [],
    }
  },
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
