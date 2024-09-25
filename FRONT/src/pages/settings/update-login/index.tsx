import { useForm } from "react-hook-form"

import { useState } from "react"

import {  useNavigate } from "react-router-dom";
import { handleUpdateLogin, handleVerify } from "../../../lib/api";
import { IUpdateLogin } from "../../../lib/types";

export const UpdateLogin = ()=>{
    const {register,handleSubmit,reset} = useForm<IUpdateLogin>()
    const[errors,setErrors] = useState<string>("")
    const navigate = useNavigate()
    
    const updateLogin = async({password,login}:IUpdateLogin)=>{
        if(typeof password != "string" && typeof login != "string"){
            setErrors("please fill the string")
        }
        const verify =  await handleVerify()
        if(verify.status=="error"){
            setErrors(verify.message || "user vefification field")
        }
        handleUpdateLogin({password,login})
        .then(response=>{
            if(response.status == "error" && response.message){
                setErrors(response.message)
            }else{
                reset()
                navigate("/profile")
            }
        })
    }

    
    return <>
    <h1>Settings</h1>
    <form onSubmit={handleSubmit(updateLogin)}>
        {errors && <p style={{color:"red"}}>{errors}</p>}
        <input 
            type="text"
            {...register("login",{required:true})}
         />
         <input 
         type="text"
         {...register("password",{required:true})}
          />
          <button>save</button>
    </form>
    {/* <NavLink to="/profile/update">Update password</NavLink> */}
    </>
}