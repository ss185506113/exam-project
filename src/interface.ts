import { RouteComponentProps } from 'react-router-dom';

export interface Props extends RouteComponentProps{}

export interface AntdForm {
    [key:string]:any
}

export interface User {
    user_name:string
    user_pwd:string
    identity_id:string|number
}

export interface UpUser extends User{
    user_id:string|number
}