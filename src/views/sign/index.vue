<template>
  <div id="container">
      <div>
          <img :src="logo" style="width: 184px; height: 76px"><br />

          <p id="title">{{ isLogin ? '嗨，欢迎回来！' : '创建账户 记录学习历程' }}</p>
          <p>{{ isLogin ? '登陆到您的账户' : '注册并开始使用' }}</p>

          <router-view></router-view>
      </div>
      <img id="bg" :src="signBg">
  </div>
</template>

<script setup lang="ts">
import signBg from '#/assets/SignBg.png'
import logo from '#/assets/Logo.png'

import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isLogin = computed(() => route.name === 'login')
// const router = useRouter()

// if (route.name !== 'login' && route.name !== 'register') {
//     router.push({ name: 'login' })
// }
console.log('change route')

</script>

<style scoped>
#container {
  width: 1440px;
  height: 840px;
  margin: 50px auto;
  position: relative;
  background: #FFFFFF;
}

#bg {
  height: 100%;
  width: 670px;
  position: absolute;
  right: 0;
  top: 0
}

#container> :first-child {
  width: 540px;
  position: absolute;
  top: 50%;
  left: calc(50% - 670px / 2);
  transform: translateY(-50%) translateX(-50%);
}

#title {
  margin: 45px 0 12px;
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  color: #292C38;
}

#title+p {
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #73778B;
  margin-bottom: 30px
}
</style>
