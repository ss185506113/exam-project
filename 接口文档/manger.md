#### 简要描述：

  ##### 获取班级接口
- 请求URL：
   /manger/grade
- 请求方式：
  GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
- 返回示例
```
    {
    code: 1，
    msg:"获取班级成功",
    data:[]
    }
```

#### 简要描述：

  ##### 获取未分配教室班级接口
- 请求URL：
   /manger/grade/new
- 请求方式：
  GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
- 返回示例
```
    {
    code: 1，
    msg:"获取班级成功",
    data:[]
    }
```

#### 简要描述：

  ##### 获取班级接口
- 请求URL：
   /manger/room
- 请求方式：
  GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
- 返回示例
```
    {
    code: 1，
    msg:"获取教室成功",
    data:[]
    }
```

#### 简要描述：

  ##### 添加
- 请求URL：
   /manger/grade
- 请求方式：
  GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
- 返回示例
```
    {
    code: 1，
    msg:"获取所有班级",
    data:[]
    }
```


#### 简要描述：

  ##### 添加班级
- 请求URL：
   /manger/grade
- 请求方式：
  POST
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| grade_name | 是 |  string | 班级名字 |
| room_id | 是 |  string | 教室id |
| subject_id | 是 |  string | 课程id |
- 返回示例
```
    {
    code: 1,
    grade_id: "nyhxap-7sewt4-v8bte-meqfp8",
    msg: "创建班级成功"
    }
```

#### 简要描述：

  ##### 修改班级
- 请求URL：
   /manger/grade/updata
- 请求方式：
  PUT
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| grade_name | 是 |  string | 班级名字 |
| room_id | 是 |  string | 教室id |
| subject_id | 是 |  string | 课程id |
- 返回示例
```
    {
    code: 1,
    msg: "更新成功"
    }
```

#### 简要描述：

  ##### 删除班级
- 请求URL：
   /manger/grade/delete
- 请求方式：
  DELETE
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| grade_id | 是 |  string | 班级id |
- 返回示例
```
    {
    code: 1,
    msg: "删除成功"
    }
```

#### 简要描述：

  ##### 添加教室
- 请求URL：
   /mange/room
- 请求方式：
  DELETE
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| room_text | 是 |  string | 教室名字 |
- 返回示例
```
    {
    code: 1,
    msg: "添加成功"
    }
```

#### 简要描述：

  ##### 修改教室
- 请求URL：
   /mange/room/updata
- 请求方式：
  PUT
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| room_text | 是 |  string | 教室名字 |
| room_id | 是 |  string | 教室id |
- 返回示例
```
    {
    code: 1,
    msg: "修改成功"
    }
```


#### 简要描述：

  ##### 删除教室
- 请求URL：
   /mange/room/delete
- 请求方式：
  DELETE
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| room_id | 是 |  string | 教室id |
- 返回示例
```
    {
    code: 1,
    msg: "删除成功"
    }
```

#### 简要描述：

  ##### 获取学生数据接口
- 请求URL：
   /mange/student
- 请求方式：
  GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
- 返回示例
```
    {
    code: 1,
    msg: "获取成功",
    data:[]
    }
```

#### 简要描述：

  ##### 获取未分班学生数据接口
- 请求URL：
   /mange/student/new
- 请求方式：
  GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
- 返回示例
```
    {
    code: 1,
    msg: "获取成功",
    data:[]
    }
```

#### 简要描述：

  ##### 添加学生
- 请求URL：
   /mange/student/new
- 请求方式：
  POST
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| student_id | 是 |  string | 学生id |
| student_name | 是 |  string | 学生姓名 |
| student_pwd | 是 |  string | 学生密码 |
- 返回示例
```
    {
    code: 1,
    msg: "获取成功",
    }
```


#### 简要描述：

  ##### 修改学生信息
- 请求URL：
   /mange/student/edit
- 请求方式：
 PUT
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| student_id | 是 |  string | 学生id |
| student_name | 是 |  string | 学生姓名 |
- 返回示例
```
    {
    code: 1,
    msg: "修改成功",
    }
```

#### 简要描述：

  ##### 删除学生信息
- 请求URL：
   /mange/student/：id
- 请求方式：
 PUT
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token |
| student_id | 是 |  string | 学生id |
- 返回示例
```
    {
    code: 1,
    msg: "删除成功",
    }
```