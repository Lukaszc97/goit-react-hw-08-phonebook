import { selectorIsLoggedIn, selectorIsRefreshing, selectorUser } from 'Redux/auth/selectors';
import {useSelector} from 'react-redux'

export const useAuth = () => {
    const isLoggedIn =useSelector(selectorIsLoggedIn);
    const isRefreshing = useSelector(selectorIsRefreshing);
    const user = useSelector(selectorUser);
    return{
        isLoggedIn,
        isRefreshing,
        user
    }
}