
import { createSlice } from "@reduxjs/toolkit";
import { request, setToken as _setToken, getToken} from "@/utils";
import { removeToken } from "@/utils";

const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken(),
    userInfo: {}, // 用户信息
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    clearUserInfo: (state) => {
      state.token = ''
      state.userInfo = {}
      removeToken()
    }
  },
});

// 返回修改的函数
const { setToken, setUserInfo, clearUserInfo } = userStore.actions;

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post("/authorizations", loginForm)
    const token = res.data.token
    dispatch(setToken(token))
    _setToken(token)
  };
}

const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await request.get("/user/profile");
    dispatch(setUserInfo(res.data));
  };
}

export { setToken, fetchLogin, fetchUserInfo, clearUserInfo };

// 返回reducer
const userReducer = userStore.reducer;
export default userReducer;
