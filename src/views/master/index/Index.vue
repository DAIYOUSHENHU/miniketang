<template>
<div>
  <Trace>首页</Trace>

  <p>我是首页</p>
  <div>
    <p v-for="item in data" :key="item.title">
      {{item.title}}
    </p>
  </div>
</div>
</template>

<script>
import Trace from '@/components/common/trace/Trace'
import {
  getMasterInfo
} from '@/network/masterindex'
export default {
  name: 'Index',
  data() {
    return {
      data: []
    }
  },
  methods: {

  },
  components: {
    Trace,
  },

  created() {
    getMasterInfo().then(res => {
      this.data = res.data.banner.list;
      console.log(this.data);
    })
  }
}
</script>

<style>

</style>
