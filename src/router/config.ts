/*
 * @Description: 
 * @Author: 刘涵
 * @Date: 2020-10-19 10:37:01
 * @LastEditors: 刘涵
 * @LastEditTime: 2020-10-19 12:31:30
 * @FilePath: \react-mobx-ts\src\router\config.ts
 */
import Home from '@/view/Home'
import Detail from '@/view/Detail'

const router = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail
    }
];

export default router;