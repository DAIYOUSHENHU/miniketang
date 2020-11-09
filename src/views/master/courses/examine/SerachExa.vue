<template>
<div>
  <div id="searchExaSty" style="" border>
    <el-input @keyup.enter.native="searchClick" placeholder="请输入添加内容" prefix-icon="el-icon-search" size="small" style="width: 400px;margin-right: 10px" v-model="keywords">
    </el-input>
    <el-button size="small" type="primary" icon="el-icon-search" @click="searchClick">查询</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'SearchExa',
  data() {
    return {
      keywords: '',
      cardLoading: [],
    }
  },
}
</script>

<style>
#searchExaSty {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center
}
</style>
