<template>
  <div id="container">
    <div class="lastSearchTitle">最近搜索</div>
    <div></div>
    <div class="h-[60px] mx-[3px] flex justify-between items-center" v-for="item in searchHistory" :key="item.code">
      <div class="w-[150px] font-normal tracking-[0.1px] leading-[15.4px] text-[11px]" style="font-family: Yinmar">
        {{ item.name }}</div>
      <div class="flex flex-col items-end" style="font-family: Yinmar">
        <div class="font-normal tracking-[0.3px] leading-[14px] text-[10px] text-[#96A0B5] mb-[6px]">{{ item.code }}
        </div>
        <div
          class="font-normal tracking-[0.3px] leading-[14px] text-[10px] px-[7px] bg-[#FFCC00] h-[14px] rounded-[3px]">
          {{ item.kind }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import getSearchHistory from '@/common/services/searchHistory'

const searchHistory = ref([])
onMounted(async () => {
  const res = await getSearchHistory()
  const temp = res.data
  searchHistory.value = temp.slice(0, 5)
})
</script>

<style scoped>
#container {
  box-sizing: border-box;
  width: 303px;
  padding: 20px;

  height: 100%;

  border-radius: 29px;
  border: 1px solid #C5C5C5;

  box-shadow: -6px 6px 17px 0px #00000040;
}

.lastSearchTitle {
  /* width: 61px; */
  height: 21px;

  font-family: Yinmar;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;
  /* border: solid */
  margin-bottom: 8px
}

.lastSearchTitle~div {
  border-bottom: 1px solid #C5C5C582
}
</style>
