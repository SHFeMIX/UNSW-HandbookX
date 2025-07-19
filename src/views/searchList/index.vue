<template>
  <div w-1440px h-840px mx-auto my-50px>
    <Header />
    <SearchBox v-model="searchText" style="margin: 44px 0 23px 54px"
      @onClickSearch="() => $router.push({ name: 'searchList', query: { searchText } })" />
    <div class="tab">
      <div :class="{ active_tab: currentTab === 'All' }" @click="() => currentTab = 'All'">
        All
      </div>
      <div :class="{ active_tab: currentTab === 'Course' }" @click="() => currentTab = 'Course'">
        Course
      </div>
      <div :class="{ active_tab: currentTab === 'Program' }" @click="() => currentTab = 'Program'">
        Program
      </div>
      <div :class="{ active_tab: currentTab === 'Specialisation' }" @click="() => currentTab = 'Specialisation'">
        Specialisation
      </div>
    </div>

    <div class="listCount">共找到641条结果</div>

    <div class="listContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/common/components/Header.vue';
import SearchBox from '@/common/components/SearchBox.vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const searchText = ref(route.query.searchText as string)

const currentTab = ref('All')
</script>

<style scoped>
.tab {
  width: 418px;
  margin-left: 62px;
  display: flex;
  justify-content: space-between;

  >* {
    font-family: Inter;
    font-size: 16px;
    line-height: 22.4px;
    letter-spacing: 0.3px;
  }

  >*:hover {
    border-bottom: 4px #FFCC00 solid;
    cursor: pointer;
  }

  >.active_tab {
    border-bottom: 4px #FFCC00 solid;
    font-weight: 700;
  }
}


.listCount {
  margin: 10px 73px;
  font-family: Inter;
  font-weight: 500;
  font-size: 10.08px;
  line-height: 140%;
  letter-spacing: 0.19px;
  vertical-align: middle;
  color: #777676
}

.listContainer {
  width: 818px;
  height: 600px;
  margin-left: 69px;

  border: solid
}
</style>
