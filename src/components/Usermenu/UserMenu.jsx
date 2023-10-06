import { useDispatch } from "react-redux"
import { useAuth } from "hooks/useAuth"
import {logOut} from "../../Redux/auth/operations"


export const UserMenu = () => {
    const dispatch = useDispatch()
    const {user} = useAuth()
 const handleLogout = () => dispatch(logOut())
    
return(
    <div>
        <p>
            Welcome, {user.name}
        </p>
        <button type="button" onClick={handleLogout}>
            Logout </button>
    </div>
)
}