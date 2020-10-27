<template>
<div>
  <Trace>学生管理</Trace>
  <SearchStu></SearchStu>
  <ListStu></ListStu>
</div>
</template>

<script>
import Trace from '@/components/common/trace/Trace'
import ListStu from './ListStudents'
import SearchStu from './SearchStudent'
export default {
  name: 'Students',
  data() {
    return {

    }
  },
  components: {
    Trace,
    SearchStu,
    ListStu,
  }
}
</script>

<style>

</style>
