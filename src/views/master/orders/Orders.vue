<template>
<div>
  <Trace>查看订单</Trace>
  <SearchOrd></SearchOrd>
  <ListOrd></ListOrd>
</div>
</template>

<script>
import SearchOrd from './SearchOrder'
import ListOrd from './ListOrder'
import Trace from '@/components/common/trace/Trace'
export default {
  name: 'Orders',
  components: {
    Trace,
    SearchOrd,
    ListOrd
  }

}
</script>

<style>

</style>
