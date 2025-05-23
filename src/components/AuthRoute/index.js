import { getToken } from "@/utils";
import {setToken} from "@/store/AppStore/modules/user"

import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";


const AuthRoute = ( {children} ) => {
  const dispatch = useDispatch()
  const token = getToken()
  if(token) {
    dispatch(setToken(token))
    return children
  }else {
    return <Navigate to="/login" replace />
  }
}

export default AuthRoute;