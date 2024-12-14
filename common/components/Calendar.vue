<template>
    <div class="calendar">
        <div id="header">
            <div @click="currShowing = currShowing.subtract(1, 'month')">{{ '<' }}</div>
            <div id="title">{{ currShowing.year() }}.{{ ('0' + (currShowing.month() + 1)).slice(-2) }}</div>
            <div @click="currShowing = currShowing.add(1, 'month')">{{ '>' }}</div>
        </div>

        <div></div>

        <div>
            <div v-for="index in ['日', '一', '二', '三', '四', '五', '六']" :key="index">{{ index }}</div>
            <div v-for="(day, index) in calendar" :key="index"
                :style="{ background: isToday(day) ? '#FFCC0073' : '' }">{{ day }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import dayjs from 'dayjs'

const timestamp = ref(dayjs())
const interval = setInterval(() => {
    timestamp.value = dayjs()
}, 1800000)

onUnmounted(() => clearInterval(interval))

const currShowing = ref(dayjs())

const calendar = computed(() => {
    const firstDay = currShowing.value.startOf('month').day()
    const lastDate = currShowing.value.endOf('month').date()

    const days = Array(firstDay).fill('')

    for (let i = 1; i <= lastDate; i++) {
        days.push(i)
    }

    for (let i = 0; i < 42 - lastDate - firstDay; i++) {
        days.push('')
    }

    return days
})

function isToday(day) {
    const today = timestamp.value
    return today.isSame(currShowing.value, 'month') && today.date() === day
}
</script>

<style scoped>
.calendar {
    width: 278px;
    height: 240.88px;
    background: #FBFBFB;
    border-radius: 18.16px;
    border: 0.79px solid #D9D9D96E;

    box-shadow: -6px 8px 16.8px 0px #0000001A;

    padding-top: 14.22px;
    margin-left: 100px;
    margin-top: 100px
}

#title {
    width: 72px;
    height: 27px;
    margin: 0 auto;

    font-family: Yinmar;
    font-size: 18.95px;
    font-weight: 400;
    line-height: 26.54px;
    letter-spacing: 0.23693183064460754px;
    text-align: center;

    color: #303030
}

#header {
    display: flex;
    justify-content: space-between;
}

#header> :nth-child(2n + 1) {
    margin: 0 30px;
    cursor: pointer;

    font-family: Yinmar;
    font-size: 18.95px;
    font-weight: 400;
    line-height: 26.54px;
    letter-spacing: 0.23693183064460754px;
    text-align: left;

    user-select: none;

    color: #303030
}

#header+* {
    width: 226.66px;
    height: 0px;
    margin: 3px auto 9px;
    border: 0.79px solid #C5C5C5
}

.calendar> :last-child {
    width: 210px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
}

.calendar> :last-child>* {
    width: 20px;
    margin: 5px 5px;

    font-family: Yinmar;
    font-size: 13px;
    font-weight: 400;
    line-height: 17.69px;
    letter-spacing: 0.23693183064460754px;
    text-align: center;

    color: #303030;

    border-radius: 50%;
}
</style>
