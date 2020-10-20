/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑       永不宕机     永无BUG
 * 
 *        佛曰:  
 *                写字楼里写字间，写字间里程序员；  
 *                程序人员写程序，又拿程序换酒钱。  
 *                酒醒只在网上坐，酒醉还来网下眠；  
 *                酒醉酒醒日复日，网上网下年复年。  
 *                但愿老死电脑间，不愿鞠躬老板前；  
 *                奔驰宝马贵者趣，公交自行程序员。  
 *                别人笑我忒疯癫，我笑自己命太贱；  
 *                不见满街漂亮妹，哪个归得程序员？
 * @Descripttion : 
 * @Autor        : 高泽康
 * @Date         : 2020-10-20 10:37:13
 * @LastEditTime : 2020-10-20 13:58:22
 * @FilePath     : \src\view\home\Testadd.tsx
 */

import React, { Component } from 'react'
import requert from "../../utils/request"

interface State{
    list:Array<any>;
    tg:string
}
export default class Testques extends Component<any,State> {
    state={
        list:[],
        tg:'',
    }
    inputChange(e:InputEvent){
        let el=(e.target as any).value;

        this.setState({
            tg:el
        })  
    }
    getInputValue(){
        console.log(this.state.tg)
    }

    render() {
        // this.props.xxx
        // (this.props as any).xxx
        return (
            <div className="Testadd">
                <p>题目信息</p>
                <p>题干</p>
                <p> <input value={this.state.tg} onChange={(e)=>this.inputChange(e as any)}></input> </p>
                <p><button onClick={()=>this.getInputValue()}>提交</button></p>
                <p>题目主题</p>
            </div>
        )
    }
}
