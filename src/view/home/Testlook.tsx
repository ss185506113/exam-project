/*
 *                   江城子 . 程序员之歌
 * 
 *               十年生死两茫茫，写程序，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 * 
 *               领导每天新想法，天天改，日日忙。
 *                   相顾无言，惟有泪千行。
 *               每晚灯火阑珊处，夜难寐，加班狂。
 * 
 * @Descripttion : 
 * @Autor        : 高泽康
 * @Date         : 2020-10-20 10:37:13
 * @LastEditTime : 2020-10-20 22:21:22
 * @FilePath     : \src\view\home\Testlook.tsx
 */

import React, { Component } from 'react'

import {_room} from "../../api/apiss"
interface IState {
    getdata: any//数组
}
export default class Testlook extends Component <any,IState> {
    state={
        getdata:[]
    }

    render() {
        return (
            <div className="Testlook">
                <div className="shang">
                    <p>课程类型:</p>
                    <p>考试类型：
                    <select>
                        <option>周考1</option> 
                        <option>周考2</option>
                        <option>周考3</option>
                        <option>月考</option>
                    </select>   题目类型
                    <select>
                        <option>221</option> 
                        <option>22</option>
                        <option>23</option>
                        <option>考ss</option>
                    </select>
                    <button>查询</button>
                    </p>
                </div>
                <div className="xia"></div>
            </div>
        )
    }
}

