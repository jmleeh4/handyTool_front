import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/components/account/Login'
import Registration from '@/components/account/Registration'

const router = createRouter({
    history     : createWebHistory(),
    routes      : [
        { path : "/",               name : "로그인",    component : Login},
        { path : "/registration",   name : "회원가입",   component : Registration}
    ]
})

export default router;