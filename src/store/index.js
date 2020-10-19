/*
 * @Description: 
 * @Author: 刘涵
 * @Date: 2020-10-12 11:25:41
 * @LastEditors: 刘涵
 * @LastEditTime: 2020-10-12 16:32:17
 * @FilePath: \my-react-mobx\src\store\index.js
 */
const context = require.context('./model', false, /\.js$/);

const getModel = context.keys().map(key => context(key));

const Store = {};

getModel.forEach(model => {
    Store[model.default.namespace] = model.default;
});

export default Store;
