<template>
<div>
  <Trace>讲师管理</Trace>
  <SearchLec></SearchLec>
  <ListLec></ListLec>
</div>
</template>

<script>
import SearchLec from './SearchLecturer'
import ListLec from './Listlecturers'
import Trace from '@/components/common/trace/Trace'
export default {
  name: 'Lecturers',
  components: {
    Trace,
    SearchLec,
    ListLec
  }
}
</script>

<style>

</style>
