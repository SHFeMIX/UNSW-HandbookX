<template>
  <div class="home">
    <Header></Header>
    <div class="title">一站式 UNSW 学习 & 就业规划网站</div>

    <SearchBox v-model="searchText" :recommendations="recommendations"
      placeholder="输入Course、Program、Specialisation关键字，开启规划之旅"
      @onClickSearch="() => $router.push({ name: 'searchList', query: { searchText } })"
      @onClickRecommendationItem="item => $router.push({ name: 'detail', params: { code: item.code } })">
      <template v-slot="item">
        <div class="recoItem">{{ item.code }}</div>
        <div class="recoItem">{{ item.name }}</div>
        <div class="recoItem">{{ item.kind }}</div>
      </template>
    </SearchBox>

    <div class="content">
      <SearchHistory />
      <CoursePlanning />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import SearchHistory from './components/SearchHistory.vue'
import CoursePlanning from './components/CoursePlanning.vue';
import Header from '@/common/components/Header.vue'
import SearchBox from '@/common/components/SearchBox.vue'
import useDebouncedRef from '@/common/hooks/useDebouncedRef';

import getSearchRecommendation from '@/common/services/searchRecommendation'

const searchText = useDebouncedRef('', 1000)

interface RecommendationItem {
  code: string,
  name: string,
  kind: string
}
const recommendations = ref<RecommendationItem[]>([])

watch(searchText, async () => {
  const res = await getSearchRecommendation()
  recommendations.value = res.data
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

.content {
  width: 1209px;
  height: 401px;
  margin: 90px auto;
  display: flex;
  justify-content: space-between
}

.recoItem {
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;

  &:first-child {
    width: 100px;
    height: 22px;
  }

  &:nth-child(2) {
    width: 450px;
    height: 22px;
  }

  &:last-child {
    width: 125px;
    height: 30px;
    padding-top: 8px;

    border-radius: 20px;
    background: #FFCC0099;
  }
}
</style>
