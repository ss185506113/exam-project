<!--
 * @Author: your name
 * @Date: 2020-10-18 18:19:46
 * @LastEditTime: 2020-10-18 19:33:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \接口文档\exam.md
-->

#### 简要描述：

  ##### 获取所有试题类型接口
- 请求URL：
   /exam/getQuestionsType
- 请求方式：
  GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
- 返回示例
```
  {
    "code": 1,
    "msg": "数据获取成功",
    "statusMsg": "服务器成功返回请求的数据。",
    "status": 200,
}
```

# 添加试题类型
#### 简要描述：

  #####  添加试题类型接口
- 请求URL：

/exam/insertQuestionsType
- 请求方式：

POST
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| questions_type_text | 是 |  string | 试题类型 |
| questions_type_sort | 是 |  number | 试题类型分类 |


- 返回示例
```
  {
    "code": 1,
    "msg": "数据插入。",
    "statusMsg": "服务器成功返回请求的数据。",
    "status": 201,
}
```

#### 简要描述：

  ##### 考试类型获取接口
- 请求URL：

  /exam/examType
- 请求方式：
  GET
  - 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |

- 返回示例
```
  {
    "msg": "考试类型获取成功",
    "code": 1,
    "data": [
        {
            "exam_id": "8sc5d7-7p5f9e-cb2zii-ahe5i",
            "exam_name": "周考1"
        },
        {
            "exam_id": "wbxm4-jf8q6k-lvt2ca-ze96mg",
            "exam_name": "月考"
        }
    ]
}
```


#### 简要描述：

  ##### 删除试题类型接口
- 请求URL：

    /exam/delQuestionsType
- 请求方式：
  post

- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| questions_type_id| 是 |  string |试题类型id |
- 返回示例
```
  {
    "code": 1,
    "msg": "删除成功",
    "statusMsg": "服务器成功返回请求的数据。",
    "status": 200,
}
```

#### 简要描述：

  ##### 获取课程类型接口
- 请求URL：

  /exam/subject
- 请求方式：
  get

- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |

- 返回示例
```
  {
    "msg": "所有的课程获取成功",
    "code": 1,
    "data": [
        {
            "subject_id": "fqtktr-1lq5u",
            "subject_text": "javaScript上"
        },
        {
            "subject_id": "wl5yk-38c0g",
            "subject_text": "javaScript下"
        },
    ]
}
```

#### 简要描述：

  ##### 添加试题类型接口
- 请求URL：

  /exam/questions
- 请求方式：
  POST

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| exam_id | 是 |  string | 考试类型id |
| questions_answer | 是 |  string | 答案 |
| questions_stem | 是 |  string | 问题 |
| questions_type_id | 是 |  string | 试题类型id |
| subject_id | 是 |  string | 课程id |
| titile | 是 |  string | 题目标题 |
| type | 是 |  string | 课程id |
| user_id | 是 |  string | 用户id |

- 返回示例
```
  {
    "msg": "试题添加成功",
    "code": 1,
}
```

#### 简要描述：

  ##### 获取试题接口
- 请求URL：

  /exam/questions/condition
- 请求方式：
  GET

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| exam_id | 是 |  string | 考试类型id |
| questions_type_id | 是 |  string | 试题类型id |
| subject_id | 是 |  string | 课程id |
| questions_id | 是 |  string | 试题id |

- 返回示例
```
  {
    "msg": "试题获取成功",
    "code": 1,
    "data":[]
}
```

#### 简要描述：

  ##### 修改试题接口
- 请求URL：

  /exam/questions/updata
- 请求方式：
  GET

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| exam_id | 是 |  string | 考试类型id |
| questions_answer | 是 |  string | 答案 |
| questions_stem | 是 |  string | 问题 |
| questions_type_id | 是 |  string | 试题类型id |
| subject_id | 是 |  string | 课程id |
| title | 是 |  string | 试题标题 |

- 返回示例
```
  {
    "msg": "试题获取成功",
    "code": 1,
    "data":[]
}
```

#### 简要描述：

  ##### 添加试卷接口
- 请求URL：

  /exam/exam
- 请求方式：
  POST

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| exam_id | 是 |  string | 考试类型id |
| number | 是 |  string | 数量 |
| start_time | 是 |  string | 开始时间 |
| end_time | 是 |  string | 结束时间 |
| subject_id | 是 |  string | 课程id |
| titile | 是 |  string | 题目标题 |

- 返回示例
```
  {
    "code": 1,
    "msg": "创建试卷成功",
}
```

#### 简要描述：

  ##### 获取试卷接口
- 请求URL：

  /exam/exam/:exam_id
- 请求方式：
  GET

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| exam_id | 可选 |  string | 考试类型id |

- 返回示例
```
  {
    "code": 1,
    "msg": "获取试卷成功",
    exam:{}，//没有exam_id
    data:{}//存在exam_id
}
```


#### 简要描述：

  ##### 修改试卷接口
- 请求URL：

  /exam/exam/:exam_id
- 请求方式：
  PUT

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| question_ids | 可选 |  JSON数组字符串 | 所有试题 |

- 返回示例
```
  {
    "code": 1,
    "msg": "更新试卷",
}
```

#### 简要描述：

  ##### 批改试卷接口
- 请求URL：

  /exam/student/:id
- 请求方式：
  PUT

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| id | 是 | string | 学生试卷id |
| score | 是 | number | 分数 |

- 返回示例
```
  {
    "code": 1,
    "msg": "批改试卷成功",
}
```

#### 简要描述：

  ##### 根据班级获取学生试卷列表接口
- 请求URL：

  /exam/student
- 请求方式：
  GET

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| grade_id | 是 | string | 班级id |

- 返回示例
```
  {
    "code": 1,
    "msg": "成功",
    exam：[]
}
```

#### 简要描述：

  ##### 获取试卷详情接口
- 请求URL：

  /exam/student/:id
- 请求方式：
  GWT

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| id | 是 | string | 学生试卷id |

- 返回示例
```
  {
    "code": 1,
    "msg": "获取成功",
    exam：[]
}
```