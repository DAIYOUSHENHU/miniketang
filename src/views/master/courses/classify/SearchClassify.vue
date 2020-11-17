<template>
<div>
  <div id="searchLecSty" style="" border>
    <el-input @keyup.enter.native="searchClick(keywords)" placeholder="请输入查询内容" prefix-icon="el-icon-search" size="small" style="width: 400px;margin-right: 10px" v-model="keywords">
    </el-input>
    <el-button size="small" type="primary" icon="el-icon-search" @click="searchClick(keywords)">查询</el-button>
  </div>
</div>
</template>

<script>
import bus from '@/components/eventBus/eventBus'
export default {
  name: 'AddCla',
  data() {
    return {
      keywords: '',
    }
  },
  methods: {
    searchClick(words) {
      if (words != '') {
        bus.$emit('searchByName', words);
      }
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
