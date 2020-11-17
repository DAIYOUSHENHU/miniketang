<template>
<div>
  <Trace>首页</Trace>

  <p>我是首页</p>
</div>
</template>

<script>
import Trace from '@/components/common/trace/Trace'
import {
  getMasterInfo
} from '@/network/masindex'
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
      this.data = res.data;
      console.log(this.data);
    })
  }
}
</script>

<style>

</style>
