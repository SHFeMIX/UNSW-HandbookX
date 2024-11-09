<template>
    <div class="tabBar">
        <div @click="left"><</div>
        <div>
            <div class="list">
                <div v-for="(item, index) in list" key="item"
                    :style="{
                        backgroundColor: currIndex === index ? 'grey': '',
                        transform: `translateX(${firstShowIndex * -100}px)`
                    }"
                    @click="currIndex = index"
                >{{ item }}</div>
            </div>
        </div>
        <div @click="right">></div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const list = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9])
const currIndex = ref(0)
const firstShowIndex = ref(0)
const windowSize = 5
function left() {
    if (firstShowIndex.value === currIndex.value) {
        return
    }

    if (firstShowIndex.value + 5 === list.length) {
        return
    }

    firstShowIndex.value ++
}

function right() {
    if (firstShowIndex.value + 4 === currIndex.value) {
        return
    }

    if (firstShowIndex.value === 0) {
        return
    }

    firstShowIndex.value --
}
</script>

<style scoped>
.tabBar {
    width: 600px;
    height: 50px;
    margin: 30px auto;
    border: solid;
    display: flex;
    justify-content: space-between;

    > *:nth-child(2n + 1) { 
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        background-color: yellow;
        user-select: none;
    }

    > *:nth-child(2) {
        width: 500px;
        overflow: hidden;
    }
}

.list {
    display: flex;
    width: 900px;
    justify-content: space-around;

    > * {
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        height: 50px;
        transition: transform;
        
        &:hover {
            background-color: grey
        }
    }
}
</style>
