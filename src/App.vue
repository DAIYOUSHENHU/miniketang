<template>
<div id="app">
  <MasterIndex></MasterIndex>
</div>
</template>

<script>
import MasterIndex from './views/master/MasterIndex'
export default {
  name: 'app',
  components: {
    MasterIndex,
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
