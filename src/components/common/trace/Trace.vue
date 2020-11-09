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
  background-color: white;
  text-align: center;
  font-size: 22px;
  height: 50px;
  width: 100%;
  margin-top: 0;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.3);
}

.trace p {
  height: 50px;
  margin-top: 10px;
  height: 50px;
  width: 100%;
  padding-top: 10px;
}
</style>
