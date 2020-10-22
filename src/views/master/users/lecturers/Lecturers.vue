<template>
<div>
  <SearchLec></SearchLec>
  <ListLec></ListLec>
</div>
</template>

<script>
import SearchLec from './SearchLecturer'
import ListLec from './Listlecturers'
export default {
  name: 'Lecturers',
  components: {
    SearchLec,
    ListLec
  }
}
</script>

<style>

</style>
