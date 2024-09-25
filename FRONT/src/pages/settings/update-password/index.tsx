import { useForm } from "react-hook-form"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { IUpdatePassword } from "../../../lib/types";
import { handleUpdatePassword, handleVerify } from "../../../lib/api";




export const  UpdatePassword = ()=>{
    const {register,handleSubmit,reset} = useForm<IUpdatePassword>()
    const[errors,setErrors] = useState<string>("")
    const navigate = useNavigate()
    
    const updatePassword = async({old,newpwd}:IUpdatePassword)=>{
        if(typeof old != "string" && typeof newpwd != "string"){
            setErrors("please fill the string")
        }
        const verify =  await handleVerify()
        if(verify.status=="error"){
            setErrors(verify.message || "user vefification field")
        }
        handleUpdatePassword({old,newpwd})
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
    <form onSubmit={handleSubmit(updatePassword)}>
        {errors && <p style={{color:"red"}}>{errors}</p>}
        <input 
            type="text"
          
            {...register("old",{required:true})}
         />
         <input 
         type="text"
         
         {...register("newpwd",{required:true})}
          />
          <button>save</button>
    </form>
    {/* <NavLink to="/profile/update">Update password</NavLink> */}
    </>
}