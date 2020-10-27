<template>
<div>
  <div class="trace">
    <p>
      <slot></slot>
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'trace'

}
</script>

<style>
.trace {
  background-color: #555555;
  text-align: center;
  font-size: 22px;
  height: 50px;
  width: 100%;
  margin-top: 0;
}

.trace p {
  height: 50px;
  margin-top: 10px;
  height: 50px;
  width: 100%;
}
</style>
