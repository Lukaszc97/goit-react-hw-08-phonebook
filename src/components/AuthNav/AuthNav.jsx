import { NavLink } from "react-router-dom";

export const AuthNav= () => {
    return(
    <div>
        <NavLink to="/registration">
        Register
        </NavLink>
        <NavLink to ="/login">
            Log in
        </NavLink>
    </div>
    )
}