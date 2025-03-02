<template>
  <div class="searchList">
    <Header />
    {{ route.query }}
</div>
</template>

<script setup lang="ts">
import Header from '@/common/components/Header.vue';
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>
.searchList {
  width: 1440px;
  height: 840px;

  margin: 50px auto;
}
</style>
