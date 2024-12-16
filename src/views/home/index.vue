<template>
  <div class="home">
    <Header></Header>
    <div class="title">一站式 UNSW 学习 & 就业规划网站</div>
    <div class="search">
      <input placeholder="输入Course、Program、Specialisation关键字，开启规划之旅" v-model="searchText" @focus="focus = true"
        @blur="focus = false" :style="{
          borderRadius: `11px 0 0 ${isRecommendating ? '0' : '11px'}`,
          borderBottom: !isRecommendating ? '3px solid #FFCC00' : 'initial'
        }" />
      <div @click="">
        <div class="button">规划探索</div>
        <img :src="fly" />
      </div>

      <div class="recommendation" v-show="isRecommendating">
        <div class="spliter"></div>
        <div class="recoItem" v-for="i in recommendation" :key="i"
          @mousedown="$event.button === 0 && $router.push({ name: 'detail', params: { code: i.code } })">
          <!-- 用mousedown是为了比输入框的blur先执行 -->
          <div>{{ i.code }}</div>
          <div>{{ i.name }}</div>
          <div>{{ i.kind }}</div>
        </div>
      </div>
    </div>

    <div class="content">
      <div>
        <div class="lastSearchTitle">最近搜索</div>
        <div></div>
        <div class="h-[60px] mx-[3px] flex justify-between items-center" v-for="item in searchHistory">
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
      <div>
        <Calendar></Calendar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import Header from '@/common/components/Header.vue'
import Calendar from '@/common/components/Calendar.vue'
import useDebouncedRef from '@/common/hooks/useDebouncedRef';

import fly from '@/common/assets/fly.png'

const searchText = useDebouncedRef('', 1000)

const focus = ref(false)

const isRecommendating = computed(() => searchText.value && focus.value)

const recommendation = ref([])
watch(searchText, async () => {
  if (isRecommendating.value) {
    const data = await fetch('/api/searchRecommendation')

    recommendation.value = await data.json()
  }
})

const searchHistory = ref([])
onMounted(async () => {
  const data = await fetch('/api/searchHistory')
  const temp = await data.json()
  searchHistory.value = temp.slice(0, 5)
})

</script>

<style scoped>
.home {
  width: 1440px;
  height: 840px;

  margin: 50px auto;
}

.title {
  width: 690px;
  height: 63px;
  margin: 60px auto 45px;

  font-family: Inter;
  font-size: 40px;
  font-weight: 500;
  line-height: 56px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;
  color: #000000;

}

.search {
  width: 900px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

.search input {
  /* box-sizing: border-box; */
  width: 725px;
  height: calc(100% - 8px);
  border: 3px solid #FFCC00;
  /* border-radius: 11px 0 0 11px; */
  border-right: initial;
  padding-left: 18px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;
}

input:focus {
  outline: none;
}

.search>div:nth-child(2) {
  width: 146px;
  height: 100%;
  background: #FFCC00;
  border-radius: 0 11px 11px 0;
  cursor: pointer;

  display: flex;
  justify-content: left
}

.search .button {
  width: 89px;
  height: 28px;
  padding-top: 18px;
  padding-left: 17px;

  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;

  user-select: none;
}

.button+img {
  width: 24px;
  height: 24px;
  align-self: center
}

.recommendation {
  box-sizing: border-box;
  border: 3px solid #FFCC00;
  border-radius: 0 0 11px 11px;
  border-top: initial;

  /* margin-left: 277px; */
  width: 750.5px;

  position: absolute;
  top: 57px;

  background-color: white
}

.spliter {
  width: 709px;
  border: 1.3px solid #96A0B566;
  margin: 0 auto 20px;
}

.recoItem {
  box-sizing: border-box;
  width: 692px;
  height: 38px;
  margin: 16px auto;
  /* border: solid; */

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;

  display: flex;
  align-items: center;

  user-select: none;
  cursor: pointer;
}

.recoItem:hover {
  border-bottom: solid;
}

.recoItem> :first-child {
  width: 100px;
  height: 22px;
  /* margin-top: 10px; */
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;

}

.recoItem> :nth-child(2) {
  width: 450px;
  height: 22px;
  /* margin-top: 10px; */
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;

}

.recoItem> :last-child {
  width: 125px;
  height: 30px;
  padding-top: 8px;

  border-radius: 20px;
  background: #FFCC0099;


  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  letter-spacing: 0.30000001192092896px;
  text-align: center;

}

.content {
  width: 1209px;
  height: 401px;
  margin: 90px auto;
  display: flex;
  justify-content: space-between
}

.content>* {
  height: 100%;

  border-radius: 29px;
  border: 1px solid #C5C5C5;

  box-shadow: -6px 6px 17px 0px #00000040;
}

.content> :first-child {
  box-sizing: border-box;
  width: 303px;
  padding: 20px;
}

.content> :last-child {
  width: 815px
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
