<!--
 * @Author: your name
 * @Date: 2020-10-18 18:23:44
 * @LastEditTime: 2020-10-18 20:53:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \接口文档\student.md
-->
#### 简要描述：

  ##### 学生登陆接口
- 请求URL：
   /student/login
- 请求方式：
 POST
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| student_id | 是 |  string | 学生id |
| student_pwd | 是 |  string | 学生密码 |
- 返回示例
```
    {
    code:1,
    msg:'登录成功',
    token:'wasfcvytyhawnmf,sc'
    }
```

#### 简要描述：

  ##### 学生信息接口
- 请求URL：
   /student/info
- 请求方式：
 GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
- 返回示例
```
{
    code:1,
    msg:'获取学生信息成功',
    data:{}
}
```

#### 简要描述：

  ##### 学生考试试卷接口
- 请求URL：
   /student/unstart/：exam_exam_id
- 请求方式：
 GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
- 返回示例
```
{
    code:1,
    msg:'获取考试试卷成功',
    data:{}
}
```

#### 简要描述：

  ##### 学生提交试卷接口
- 请求URL：
   /exam/student
- 请求方式：
 POST
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| end_time | 是 |  string | 结束时间 |
| start_time | 是 |  string | 开始时间 |
| exam_exam_id | 是 |  string | 本次考试id |
| questions | 是 | array | 试题 |
- 返回示例
```
{
    code:1,
    msg:'提交试卷成功',
    data:{}
}
```