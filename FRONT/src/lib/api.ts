import axios from "axios";
import { ILogin, InputUser, IResponse, IUser } from "./types";

const Axios = axios.create({
    baseURL: "http://localhost:4002",
    withCredentials: true
})

export const handleSignup = async (user: InputUser): Promise<IResponse> => {
    const response = await Axios.post('/signup', user)
    return response.data
}

export const handleLogin = async (user: ILogin): Promise<IResponse> => {
    const response = await Axios.post('/login', user)
    return response.data
}

export const handleVerify = async (): Promise<IResponse> => {
    const response = await Axios.get("/verify")
    return response.data
}

export const handleLogout = async():Promise<IResponse> =>{
    const response = await Axios.post("/logout")
    return response.data
}


export const handleUpdateLogin = async(payload:{password:string,login:string}):Promise<IResponse>=>{
    const response = await Axios.patch("/update/login",payload)
    return response.data
}
export const handleUpdatePassword = async(payload:{old:string,newpwd:string}):Promise<IResponse>=>{
    const response = await Axios.patch("/update/password",payload)
    return response.data
}