import React, { Component } from 'react'
import { Form, Input, Button,Select ,DatePicker} from "antd";
import { inject, observer } from "mobx-react";
const { RangePicker } = DatePicker;
@inject("testPaper")
@observer
export default class Examadd extends Component {
    render() {
        const { examType,courseType} = (this.props as any).testPaper;
        return (
            <div className='mAdd'>
            <h3>添加考试</h3>
            <div className="content">
              <Form
                name="nest-messages"
                onFinish={this.onFinish}
                style={{paddingLeft:20}}
                initialValues={this.state.fields}
              >
                <Form.Item
                  name="title"
                  label="试卷名称"
                  rules={[{ required: true }]}
                  style={{width:500,marginLeft:20,paddingTop:10}}
                >
                  <Input />
                </Form.Item>
                <Form.Item label="考试类型" style={{marginLeft:20}} name="subject_id">
                    <Select style={{width:120,marginLeft:10}}>
                    {examType.map((item: any) => {
                    return (
                      <Select.Option value={item.exam_name} key={item.exam_id}>
                          {item.exam_name}
                      </Select.Option>
                    );
                  })}
                    </Select>
            </Form.Item> 
            <Form.Item label="选择课程" style={{marginLeft:20}} name="exam_id">
                    <Select style={{width:120,marginLeft:10,display: 'flex-block'}}>
                    {courseType.map((item: any) => {
                    return (
                      <Select.Option value={item.subject_text} key={item.subject_id}>
                          {item.subject_text}
                      </Select.Option>
                    );
                  })}
                    </Select>
            </Form.Item>
           
            <Form.Item
                  style={{width:250,marginLeft:20}}
                  name="number"
                  label="设置题量"
                  rules={[{ required: true }]}
                >
                <Input />
                </Form.Item>
    
                <Form.Item name="start_time" label="创建时间" >
                            <DatePicker />
                        </Form.Item>
                        <span>-</span>
                        <Form.Item name="end_time" >
                            <DatePicker />
                        </Form.Item>
                <Form.Item
                >
                    <Button type="primary" htmlType="submit">
                        创建试卷
                    </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        )
    }
    state = {
        fields: {
            subject_id: '',
            exam_id: '',
            title: '',
            number: '',
            start_time: '',
            end_time: ''
        }
      };
      onFinish = (values: any) => {
        //{testName: "111", testNum: "4"}
        console.log(values);
        //调用 创建试卷 接口 进行相应添加
        values = Object.assign(this.state.fields, values, {
            number: Number(values.number),
            start_time: Number(values.start_time),
            end_time: Number(values.end_time)
        })
        // const res = await _addTest(this.state.fields);
         //创建试卷 跳转到试卷
         (this.props as any).history.push({
            pathname:'/home/examNew',
            state:{}
        })
      };
    
    
}
