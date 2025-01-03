<template>
  <div class="progress">
    <div class="progressItem">
      <div>{{ progress.total.name }}</div>
      <div>
        <div class="precent" :style="{ width: `${progress.total.precent}%` }">
          {{ progress.total.precent }}%
        </div>
      </div>
    </div>
    <div class="progressItem">
      <div>{{ progress.term.name }}</div>
      <div>
        <div class="precent" :style="{ width: `${progress.term.precent}%` }">
          {{ progress.term.precent }}%
        </div>
      </div>
    </div>

    <div style="display: flex; justify-content: space-between;">
      <div class="UOC">
        <div>UOC</div>
        <div class="UOCRatio">
          <div>18</div>
          <div>/192</div>
        </div>
      </div>
      <div class="courses">
        <div>在读课程</div>
        <div class="courseContainer">
          <div v-for="course in currentCourses" :key="course">·{{ course }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue'
const progress = ref()
onBeforeMount(() => {
  progress.value = {
    total: {
      name: '总进度',
      precent: '30'
    },
    term: {
      name: '学期进度',
      precent: '66'
    }
  }
})

const currentCourses = ref([])
onMounted(() => {
  currentCourses.value = [
    'COMP9311', 'COMP9315', 'COMP9331'
  ]
})

</script>

<style scoped>
.progress {
  width: 356px;
  height: 192px;
  box-sizing: border-box;

  border-radius: 23px;
  border: 1px solid #D9D9D9;
  box-shadow: 0px 2px 8.4px 2px #00000021;

  padding: 26.42px 19.6px 0 25.04px
}

.progressItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px
}

.progressItem> :first-child {
  font-family: Yeseva One;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #000000
}

.progressItem> :last-child {
  width: 223px;
  height: 21px;
  border-radius: 15.5px;
  box-shadow: -1px 1px 5.6px 0px #00000040;
  background-color: #D9D9D9;
}

.precent {
  height: inherit;
  border-radius: inherit;
  background-color: #FFCC00;
  display: flex;
  justify-content: center;
  align-items: center;

  > {
    font-family: Yeseva One;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.30000001192092896px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #000000
  }
}

.UOC,
.courses {
  width: 93.63px;

  height: 51.08px;
  box-sizing: border-box;

  border-radius: 5px;
  opacity: 0px;
  border: 1px dashed #0000001F;
  background-color: #FFCC00;
}

.UOC {
  padding: 4.4px 0 0 7.62px
}

.courses {
  width: 182px;

  >*:first-child {
    font-family: Yinmar;
    font-size: 11px;
    font-weight: 400;
    line-height: 15.4px;
    letter-spacing: 0.30000001192092896px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #000000;

    margin: 3.52px 0 0 8.71px
  }
}

.courseContainer {
  width: 150px;
  margin-left: 10px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  >* {
    font-family: Yinmar;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.30000001192092896px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #484747
  }
}

.UOC> :first-child {
  font-family: Yinmar;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #000000;
}

.UOCRatio {
  display: flex;
  align-items: baseline;

  >*:first-child {
    font-family: Yinmar;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.30000001192092896px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #000000;
  }

  >*:last-child {
    font-family: Yinmar;
    font-size: 15px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.30000001192092896px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #777676
  }
}
</style>
