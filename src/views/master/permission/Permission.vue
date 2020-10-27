<template>
<div>
  <Trace>讲师认证</Trace>
  <SearchPer></SearchPer>
  <ListPer></ListPer>
</div>
</template>

<script>
import SearchPer from './SearchPer'
import ListPer from './ListPer'
import Trace from '@/components/common/trace/Trace'
export default {
  name: 'Permission',
  components: {
    Trace,
    SearchPer,
    ListPer
  }
}
</script>

<style>

</style>
