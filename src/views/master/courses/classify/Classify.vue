<template>
<div>
  <Trace>课程分类</Trace>
  <seaCla></seaCla>
  <ListCla></ListCla>
</div>
</template>

<script>
import seaCla from './SearchClassify'
import ListCla from './ListClassify'
import Trace from '@/components/common/trace/Trace'
export default {
  name: 'Classify',
  components: {
    Trace,
    seaCla,
    ListCla
  }
}
</script>

<style>

</style>
