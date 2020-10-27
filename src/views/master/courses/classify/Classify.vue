<template>
<div>
  <Trace>课程分类</Trace>
  <AddCla></AddCla>
  <ListCla></ListCla>
</div>
</template>

<script>
import AddCla from './AddClassify'
import ListCla from './ListClassify'
import Trace from '@/components/common/trace/Trace'
export default {
  name: 'Classify',
  components: {
    Trace,
    AddCla,
    ListCla
  }
}
</script>

<style>

</style>
