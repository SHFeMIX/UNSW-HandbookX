<template>
    <input placeholder="用户名" :style="{ backgroundImage: `url(${usernameImg})`, borderColor: nameValid ? '' : 'red' }"
        v-model="username" />
    <input placeholder="电子邮箱" :style="{ backgroundImage: `url(${emailImg})`, borderColor: emailValid ? '' : 'red' }"
        v-model="email" />
    <input placeholder="密码" :style="{ backgroundImage: `url(${passwordImg})`, borderColor: passwordValid ? '' : 'red' }"
        v-model="password" type="password" />
    <input placeholder="确认密码"
        :style="{ backgroundImage: `url(${passwordImg})`, borderColor: confirmValid ? '' : 'red' }" v-model="confirm"
        type="password" />
    <button @click="submit">注册</button>

    <div class="footer">
        <div></div>
        <div>已有账号 <span @click="() => $router.push('/sign/login')">登录</span></div>
        <div></div>
    </div>

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import usernameImg from '@/assets/userName.png'
import emailImg from '@/assets/email.png'
import passwordImg from '@/assets/password.png'

import useInputValidator from '@/hooks/useInputValidator'

const router = useRouter()

const [username, nameValid] = useInputValidator()
const [email, emailValid] = useInputValidator()
const [password, passwordValid] = useInputValidator()
const [confirm, confirmValid] = useInputValidator()

function validName() {
    return username.value.length > 1 && username.value.length < 16
}

function validEmail() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email.value);
}

function validPassword() {
    // 8位，包涵大小写字母和数字
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
    return regex.test(password.value);
}

function submit() {
    // name只要不是空就可以
    nameValid.value = nameValid.value && validName()
    emailValid.value = emailValid.value && validEmail()
    passwordValid.value = passwordValid.value && validPassword()

    // 但凡有任何一个是格式不对，直接return，没必要确认密码
    if (!(nameValid.value && emailValid.value && passwordValid.value)) return

    confirmValid.value = confirmValid.value && password.value === confirm.value

    if (confirmValid.value) {
        console.log(username.value, email.value, password.value)
        router.push('/home')
    }

}

</script>

<style scoped>
* {
    box-sizing: border-box;
}

input {
    width: 540px;
    height: 58px;
    display: block;
    border: 1px solid #E0E5ED;
    border-radius: 12px;
    margin-bottom: 16px;
    padding-left: 52px;

    background-repeat: no-repeat;
    background-position: 15px 50%;


    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;
    letter-spacing: 0.3px;
    text-align: left;
}

input::placeholder {
    color: #96A0B5;
}

button {
    width: 100%;
    height: 58px;
    border-radius: 12px;
    background-color: #FFCC00;
    margin-top: 20px;


    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;
    letter-spacing: 0.3px;
    text-align: center;
}

button:hover {
    background-color: #FFD633;
}

.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px
}

.footer> :not(:nth-child(2)) {
    border: 1px solid #ECEFF4;
    width: 203px
}

.footer> :nth-child(2) {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    color: #73778B;

}

.footer> :nth-child(2)>span {
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    color: #3E5AFF;
    cursor: pointer
}
</style>
