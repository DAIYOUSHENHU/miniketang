<template>
<div>
  <SearchStu></SearchStu>
  <ListStu></ListStu>
</div>
</template>

<script>
import ListStu from './ListStudents'
import SearchStu from './SearchStudent'
export default {
  name: 'Students',
  data() {
    return {

    }
  },
  components: {
    SearchStu,
    ListStu
  }
}
</script>

<style>

</style>
