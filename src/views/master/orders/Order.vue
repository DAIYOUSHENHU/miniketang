<template>
<div>
  <SearchOrd></SearchOrd>
  <ListOrd></ListOrd>
</div>
</template>

<script>
import SearchOrd from './SearchOrder'
import ListOrd from './ListOrder'
export default {
  name: 'Order',
  components: {
    SearchOrd,
    ListOrd
  }

}
</script>

<style>

</style>
