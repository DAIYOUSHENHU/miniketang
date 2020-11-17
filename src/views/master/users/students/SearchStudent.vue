<template>
<div>
  <div id="searchStuSty" style="" border>
    <el-input id="search-input" @keyup.enter.native="searchClick(searchId)" placeholder="通过编号搜索..." v-model="searchId">
    </el-input>
    <el-button id="search-btn" size="small" type="primary" icon="el-icon-search" @click="searchClick(searchId)">搜索</el-button>
  </div>
</div>
</template>

<script>
import bus from '@/components/eventBus/eventBus'
export default {
  name: 'SearchStu',
  data() {
    return {
      searchId: '',
    }
  },
  methods: {
    searchClick(id) {
      if (id != '') {
        bus.$emit('searchById', id);
      }
    },
  },
}
</script>

<style>
#searchStuSty {
  width: 500px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#search-input {
  width: 300px;
  margin-left: 25%;
  margin-right: 25%;
}

#search-btn {
  margin-left: 20px;

}
</style>
