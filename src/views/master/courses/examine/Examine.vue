<template>
<div>
  <Trace>视频审核</Trace>
  <SearchExa></SearchExa>
  <ListExa></ListExa>
</div>
</template>

<script>
import Trace from '@/components/common/trace/Trace'
import SearchExa from './SerachExa'
import ListExa from './ListExa'
export default {
  name: 'Examine',
  components: {
    Trace,
    SearchExa,
    ListExa,
  }

}
</script>

<style>

</style>
