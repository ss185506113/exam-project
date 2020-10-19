#### 简要描述：

  ##### 用户登陆接口
- 请求URL：
   /user/login
- 请求方式：
  POST
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| user_name | 是 |  string | 用户名 |
| user_pwd | 是 |  string | 密码 |
- 返回示例
```
  {
    code: 1,
    msg: "登录成功",
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWduVGltZSI6MTYwMjk4MzU3NTM4OSwidXNlcl9pZCI6ImZkamZyLW1zeHA4YSIsInVzZXJfbmFtZSI6ImhlaW5hbiIsImlkZW50aXR5X2lkIjoiNjNubzlwLTh5MGs0IiwiaWRlbnRpdHlfdGV4dCI6IueuoeeQhuWRmCIsImlhdCI6MTYwMjk4MzU3NX0.Ph5403RGoZ6VezBA1kNkGeI1URp9QkrxLb4V_QuFyqI",
    userInfo: {signTime: 1602983575389, user_id: "fdjfr-msxp8a",    user_name: "heinan", identity_id: "63no9p-8y0k4",…}
    identity_id: "63no9p-8y0k4"
    identity_text: "管理员"
    signTime: 1602983575389
    user_id: "fdjfr-msxp8a"
    user_name: "heinan"
    }
}
```

#### 简要描述：

  ##### 用户信息接口
- 请求URL：
   /user/userInfo
- 请求方式：
  GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token字段 |
- 返回示例
```
    {
    code: 1，
    data: { user_name: "heinan", identity_id: "63no9p-8y0k4",…}
    iat: 1602983575，
    identity_id: "63no9p-8y0k4"，
    identity_text: "管理员"，
    signTime: 1602983575389，
    user_id: "fdjfr-msxp8a"，
    user_name: "heinan"，
    msg: "数据获取成功"，}
    }
```

#### 简要描述：

  ##### 用户权限接口
- 请求URL：
   /user/new
- 请求方式：
  GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token字段 |
- 返回示例
```
    {
    code: 1，
    msg:"获取数据成功",
    data:{}
    }
```

#### 简要描述：

  ##### 所有用户接口
- 请求URL：
   /user/user
- 请求方式：
  GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token字段 |

- 返回示例
```
    {
    code: 1，
    msg:"获取数据成功",
    data:[]
    }
```

#### 简要描述：

  ##### 所有身份接口
- 请求URL：
   /user/identity
- 请求方式：
  GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token字段 |

- 返回示例
```
    {
    code: 1，
    msg:"获取数据成功",
    data:[]
    }
```

#### 简要描述：

  ##### 用户所有权限接口
- 请求URL：
   /user/api_authority
- 请求方式：
  GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token字段 |

- 返回示例
```
    {
    code: 1，
    msg:"获取数据成功",
    data:[]
    }
```

#### 简要描述：

  ##### 当前用户所有权限接口
- 请求URL：
   /user/identity_api_authority_relation
- 请求方式：
  GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token字段 |

- 返回示例
```
    {
    code: 1，
    msg:"获取数据成功",
    data:[]
    }
```

#### 简要描述：

  ##### 用户试图展示接口
- 请求URL：
   /user/view_authority
- 请求方式：
  GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token字段 |

- 返回示例
```
    {
    code: 1，
    msg:"获取数据成功",
    data:[]
    }
```

#### 简要描述：

  ##### 所有试图展示接口
- 请求URL：
   /user/identity_view_authority_relation
- 请求方式：
  GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token字段 |

- 返回示例
```
    {
    code: 1，
    msg:"获取数据成功",
    data:[]
    }
```

#### 简要描述：

  ##### 当前用户试图展示接口
- 请求URL：
   /user/user
- 请求方式：
  PUT
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token字段 |
| identity_id | 是 |  string | 身份id |
| user_id | 是 |  string | 用户id |
| user_name | 是 |  string | 用户名 |
| user_pwd | 是 |  string | 密码 |

- 返回示例
```
    {
    code: 1，
    msg:"更新成功",
    }
```


#### 简要描述：

  ##### 添加用户身份接口
- 请求URL：
   /user/identity/edit
- 请求方式：
  GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token字段 |
| identity_text | 是 |  string | 身份名称 |

- 返回示例
```
    {
    code: 1，
    msg:"身份添加成功",
    "identity_id":'6wmmpv-e7fjb9'
    }
```

#### 简要描述：

  ##### 添加接口api
- 请求URL：
   /user/authorityApi/edit
- 请求方式：
  GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token字段 |
| api_authority_method | 是 |  string | 请求方式 |
| api_authority_url | 是 |  string | 请求接口 |
| api_authority_text | 是 |  string | 接口名称 |

- 返回示例
```
    {
    code: 1，
    msg:"接口添加成功",
    "identity_id":'6wmmpv-e7fjb9'
    }
```

#### 简要描述：

  ##### 添加试图权限
- 请求URL：
  /user/authorityView/edit
- 请求方式：
  GET
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token字段 |
| view_authority_text | 是 |  string | 添加用户 |
| view_id | 是 |  string | 试图id |

- 返回示例
```
    {
    code: 1，
    msg:"接口添加成功",
    "identity_id":'6wmmpv-e7fjb9'
    }
```

#### 简要描述：

  ##### 给身份添加接口权限
- 请求URL：
  /user/setIdentityApi
- 请求方式：
  post
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token字段 |
| api_authority_id | 是 |  string | 接口权限id |
| identity_id | 是 |  string | 身份id |

- 返回示例
```
    {
    code: 1，
    msg:"设定成功",
    }
```

#### 简要描述：

  ##### 给身份添加接口权限
- 请求URL：
  /user/setIdentityView
- 请求方式：
  post
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token字段 |
| view_authority_id | 是 |  string | 试图权限id |
| identity_id | 是 |  string | 身份id |

- 返回示例
```
    {
    code: 1，
    msg:"设定成功",
    }
```

#### 简要描述：

  ##### 给身份添加接口权限
- 请求URL：
  /user
- 请求方式：
  post
- 参数：

| 参数名 | 必选 | 类型 |  说明|
| :----:| :----: | :----:|:----:|:----:|
| authorization | 是 |  string | token字段 |
| identity_id | 是 |  string | 身份id |
| user_name | 是 |  string | 用户名 |
| user_pwd | 是 |  string | 密码 |

- 返回示例
```
   {
    "msg": "用户添加成功",
    "code": 1,
    "user_id":'1454354'
    }
```