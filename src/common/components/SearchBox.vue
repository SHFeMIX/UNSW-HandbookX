<template>
  <div class="search">
    <input :placeholder="props.placeholder" v-model="searchText" @focus="focus = true"
      @blur="focus = false" :style="{
        borderRadius: `11px 0 0 ${isRecommendating ? '0' : '11px'}`,
        borderBottom: !isRecommendating ? '3px solid #FFCC00' : 'initial'
      }" />
    <div @click="() => $emit('onClickSearch')">
      <div class="button">规划探索</div>
      <img :src="fly" />
    </div>

    <div class="recommendation" v-show="isRecommendating">
      <div class="spliter"></div>
      <div class="recoItem" v-for="(item, index) in props.recommendations" :key="index"
        @mousedown="$event.button === 0 && $emit('onClickRecommendationItem', item)">
        <!-- 用mousedown是为了比输入框的blur先执行 -->
        <slot v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T">
import { ref, computed } from 'vue'
import fly from '@/common/assets/fly.png'

const props = defineProps<{
  placeholder?: string,
  recommendations?: T[]
}>()

defineEmits<{
  onClickSearch: [],
  onClickRecommendationItem: [item: T]
}>()

const searchText = defineModel<string>()

const focus = ref(false)
const isRecommendating = computed(() => searchText.value && focus.value)
</script>

<style scoped>
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

  background-color: white;
  z-index: 999;
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
</style>
