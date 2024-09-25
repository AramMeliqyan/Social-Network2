
import { NavLink} from "react-router-dom";

export const Settings = ()=>{
    return <>
    <NavLink to="/profile/update">Update password</NavLink>
    <NavLink to="/profile/update/login">Update Login</NavLink>
    </>
}