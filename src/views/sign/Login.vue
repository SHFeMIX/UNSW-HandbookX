<template>
    <input placeholder="用户名/电子邮箱" :style="{ backgroundImage: `url(${usernameImg})`, borderColor: nameValid ? '' : 'red' }"
        v-model="username" />
    <input placeholder="密码" :style="{ backgroundImage: `url(${passwordImg})`, borderColor: passwordValid ? '' : 'red' }"
        v-model="password" type="password" />
    <button @click="submit">登录</button>

    <div class="footer">
        <div></div>
        <div>新用户？ <span @click="() => $router.push('/sign/register')">注册</span></div>
        <div></div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import usernameImg from '@/assets/userName.png'
import passwordImg from '@/assets/password.png'
import useInputValidator from '@/hooks/useInputValidator.ts'

const router = useRouter()

const [username, nameValid] = useInputValidator()
const [password, passwordValid] = useInputValidator()

function validName() {
    return username.value.length > 3
}

function validPassword() {
    return password.value.length > 3
}

function submit() {
    nameValid.value = nameValid.value && validName()
    passwordValid.value = passwordValid.value && validPassword()

    if (nameValid.value && passwordValid.value) {
        console.log(username.value, password.value)
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
