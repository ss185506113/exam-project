import React, { Component } from 'react'
import { inject, observer } from "mobx-react";
import { Modal, Button,Select,Form } from 'antd';
@inject("testPaper")
@observer
export default class ExamNew extends Component {
    render() {
        const { examType,courseType,getQuestionList} = (this.props as any).testPaper;
        return (
            <div className="exam_big">
                 <div className="exam_small">
                 <Button type="primary" onClick={this.showModal}>
         + 添加新题
        </Button>
        <Modal
          title="所有题目"
          visible={this.state.visible}
          footer={false}
          className="model"
        >
            <div>
            {/* 课程类型 */}
               <span>课程类型</span>
                <span style={{marginLeft:20}}>全部</span>
               {courseType.slice().map((item: any,index:any) => {
                    return (
                      <span  
                         key={item.subject_id} 
                         style={{marginLeft:10}} 
                         className={this.state.initNum===index?'active':''}
                         onClick={()=>{this.changeIndex(index)}}
                         >
                          {item.subject_text}
                      </span>
                    );
                  })}
            </div>
             <div>
                 {/* 考试类型，题目类型，查询 */}
                  <Form style={{marginTop:20}}>
                  <Form.Item 
                  label="考试类型"
                  style={{ display: "inline-flex"}}
                  >
                    <Select  style={{ width: 120,  display: "inline-flex"}} onChange={this.handleChange}>
                            {examType.map((item: any) => {
                            return (
                            <Select.Option value={item.exam_name} key={item.exam_id}>
                                {item.exam_name}
                            </Select.Option>
                            );
                        })}
                    </Select>
            </Form.Item> 
                  <Form.Item
                  style={{ display: "inline-flex",marginLeft:10}}
                  label="题目类型"
                  rules={[{ required: true }]}
                >
                   <Select style={{width:120,marginLeft:10, display: "inline-flex"}} onChange={this.handleChange}>
                   {/* {getQuestionList.map((item: any) => {
                    return (
                      <Select.Option value={item.questions_type_text} key={item.questions_type_id}>
                          {item.questions_type_text}
                      </Select.Option>
                    );
                  })} */}
                    </Select>
                </Form.Item>
                 <Form.Item style={{ display: "inline-flex",marginLeft:10}}>
                  <Button type="primary" htmlType="submit" onClick={()=>{this.searchTest()}}>
                        查询
                    </Button>
                </Form.Item>
                  </Form>
             </div>
             <div>
                 {/* 所有题目 */}
             </div>

        </Modal>
       </div>
            </div>
        )
    }
    state = { 
        visible: false,
        initNum:0
     }
    // async componentDidMount()
    // {
    //     (this.props as any).testPaper.getQuestionType();
    // }
    changeIndex(index:any)
    {
        this.setState({
            initNum:index
        })
    }
     showModal = () => {
        this.setState({
          visible: true,
        });
      };
      showDialog=() =>
      {
        this.setState({
            visible:!this.state.visible
        })
      }
      handleChange=(value: any)=> {
        console.log(`selected ${value}`);
      }
      searchTest()
      {
          //获取数据进行相应搜索  调用接口

      }
}
