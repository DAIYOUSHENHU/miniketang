<template>
<div class="top-bar">
  <div class="left">
    <slot name="left"></slot>
  </div>
  <div class="space">
    <slot name="space"></slot>
  </div>
  <div class="msg">
    <slot name="msg"></slot>
  </div>
  <div class="masterimg">
    <slot name="masterimg"></slot>
  </div>
  <div class="mastername">
    <slot name="mastername"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style>
.top-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .2);
}

.left {
  width: 200px;
}

.space {
  flex: 1;
}

.msg {
  width: 100px;
}

.masterimg {
  width: 50px;
}

.mastername {
  width: 100px;
  text-align: left;
}
</style>
