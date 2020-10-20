import React, { Component } from 'react'
import { Layout, Menu } from "antd";
import {_grade} from '@/api/manger'
const { Header, Content, Footer, Sider } = Layout;



export default class Class extends Component {
    componentDidMount(){
        this.grade()
    }
    async grade(){
      let res =   await _grade()
      console.log(res)
    }
    render() {
        return (
            <div>
               <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: "24px 16px 0" }}>
                <div className="abc" style={{ padding: 24, background: "#fff",  overflowY: "scroll" }}>
                   <p>试题分类</p>
                   content
                </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>Ant Design 2018 Created by Ant UED</Footer>
            </Layout>
            </div>
        )
    }
}
