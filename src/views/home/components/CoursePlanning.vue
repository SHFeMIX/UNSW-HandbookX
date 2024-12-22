<template>
  <div id="container">
    <Calendar></Calendar>
  </div>
</template>

<script setup lang="ts">
import Calendar from '@/common/components/Calendar.vue'
</script>

<style scoped>
#container {
  height: 100%;

  border-radius: 29px;
  border: 1px solid #C5C5C5;

  box-shadow: -6px 6px 17px 0px #00000040;

  width: 815px;
  padding: 20px;
  box-sizing: border-box;
}
</style>
