import request from "@/utils/request";
import {User,UpUser} from '@/interface'

interface Login {
  username:string
  password:string
}

// 登录
export function _login({ username, password }:Login) {
  const url = "/api/user/login";
  return request.post(url, { user_name:username, user_pwd:password });
}

// 展示所有的身份
export function _identity(){
  const url = '/api/user/identity';
  return request.get(url);
}

// 展示所有的用户
export function _userUser(){
  const url='/api/user/user';
  return request.get(url);
}

// 创建用户
export function _user(obj:User){
  const url='/api/user';
  return request.post(url,{...obj})
}

// 更新用户
export function _userUpUser(obj:UpUser){
  const url = '/api/user/user';
  return request.put(url,{...obj})
}

// 添加身份
export function _edit(params:any){
  const url = '/api/user/identity/edit';
  return request.get(url,{params})
}