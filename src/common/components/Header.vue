<template>
  <div bg="#030303" w-1440px h-72px flex items-center text-white font-normal text-base tracking-0.1px leading-22.4px font-Kokoro
    style="font-family: Kokoro">
    <img :src="P" class="self-start w-[48px] h-[54.34px] mt-[5px] ml-[54px] mr-[18px]" />
    UNSW Handbook Planner
    <img :src="user" class="ml-[1015px]" />
  </div>
</template>

<script setup lang="ts">
import user from '../assets/user.png'
import P from '../assets/P.png'
</script>
