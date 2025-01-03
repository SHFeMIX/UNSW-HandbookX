<template>
  <div class="planning">
    <div style="width: 356px">
      <div class="head">
        <div>课程规划</div>
        <div>详情</div>
      </div>
      <div class="divider"></div>
      <div class="planItem" v-for="{ name, value } in planning" :key="name">
        <div>{{ name }}</div>
        <div>{{ value }}</div>
      </div>
      <StudyProcess style="margin-top: 16px"/>
    </div>

    <Calendar class="calendar" />
  </div>
</template>

<script setup lang="ts">
import Calendar from '@/common/components/Calendar.vue'
import StudyProcess from '@/common/components/StudyProgress.vue';
import { ref, onMounted } from 'vue'

const planning = ref([])
onMounted(() => {
  planning.value = [
    {
      name: 'Program of Study',
      value: '8543 Information Technology'
    },
    {
      name: 'Academic Plan of Study',
      value: 'Data Science and Engineering'
    },
    {
      name: 'Program Type',
      value: 'Masters Degree (Coursework)'
    },
    {
      name: 'Expected Graduate',
      value: '2025.12'
    }
  ]
})
</script>

<style scoped>
.planning {
  height: 100%;

  border-radius: 29px;
  border: 1px solid #C5C5C5;

  box-shadow: -6px 6px 17px 0px #00000040;

  width: 815px;
  padding: 20px 35px;
  box-sizing: border-box;

  position: relative
}

.calendar {
  position: absolute;
  top: 48px;
  left: 436px
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;

  :first-child {
    font-family: Yinmar;
    font-size: 15px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.30000001192092896px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #000000
  }

  :last-child {
    font-family: Yinmar;
    font-size: 12px;
    font-weight: 400;
    line-height: 16.8px;
    letter-spacing: 0.30000001192092896px;
    text-align: left;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #5D74FF;

    cursor: pointer;
  }
}

.divider {
  border-top: 1px solid #C5C5C582;
  margin-bottom: 12px
}

.planItem {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;

  :first-child {
    font-family: Yinmar;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.6px;
    letter-spacing: 0.30000001192092896px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #000000;
  }

  :last-child {
    font-family: Yinmar;
    font-size: 11px;
    font-weight: 400;
    line-height: 15.4px;
    letter-spacing: 0.30000001192092896px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #777676
  }
}
</style>
