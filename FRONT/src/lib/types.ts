export interface IUser{
    id:string
    name:string
    surname:string
    login:string
    password:string
    isPrivate:boolean
    cover:string
    picture:string
}

export type InputUser = Omit<IUser,"id"|"isPrivate"|"cover"|"picture">

export interface IResponse{
    status:string
    message?:string
    payload?:unknown
    user?:IWideUser
}

export interface ILogin{
    login:string
    password:string
}

export interface IWideUser extends IUser{
    folowers:IUser[]
    folowings:IUser[]
}

export interface IContextType{
    account:IWideUser
    setAccount:(user:IWideUser)=> void
}

export interface IUpdateLogin{
    password:string
    login:string
}
export interface IUpdatePassword{
    old:"string"
    newpwd:"string"
}