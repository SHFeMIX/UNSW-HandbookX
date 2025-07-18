<template>
  <div box-border w-303px p-20px h-full rounded-29px border="solid 1px #C5C5C5"
    shadow="[-6px_6px_17px_0px_rgba(0,0,0,0.25)]">
    <div class="lastSearchTitle" h-21px mb-10px font="[Yinmar] size-15px 400" leading-21px tracking-0.3px text-left>
      最近搜索
    </div>
    <div box-border border-b="solid 1px #C5C5C5"></div>
    <div class="h-[57px] mx-[3px] flex justify-between items-center" box-border border-b="solid 1px #C5C5C5"
      v-for="item in searchHistory" :key="item.code">
      <div class="w-[150px] font-normal tracking-[0.1px] leading-[15.4px] text-[11px] font-[Yinmar]">
        {{ item.name }}
      </div>
      <div class="flex flex-col items-end font-[Yinmar]">
        <div class="font-normal tracking-[0.3px] leading-[14px] text-[10px] text-[#96A0B5] mb-[6px]">
          {{ item.code }}
        </div>
        <div
          class="font-normal tracking-[0.3px] leading-[14px] text-[10px] px-[7px] bg-[#FFCC00] h-[14px] rounded-[3px]">
          {{ item.kind }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import getSearchHistory from '@/common/services/searchHistory'
import type { SearchHistoryResType } from '@/common/services/searchHistory/types'

const searchHistory = ref<SearchHistoryResType>([])
onMounted(async () => {
  const res = await getSearchHistory()
  const temp = res.data
  searchHistory.value = temp.slice(0, 5)
})
</script>
