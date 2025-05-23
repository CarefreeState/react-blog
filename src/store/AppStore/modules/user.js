
import { createSlice } from "@reduxjs/toolkit";
import { request, setToken as _setToken, getToken} from "@/utils";

const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken(),
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      _setToken(action.payload);
    },
  },
});

// 返回修改的函数
const { setToken } = userStore.actions;

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post("/authorizations", loginForm);
    dispatch(setToken(res.data.token));
  };
}
export { fetchLogin, setToken };

// 返回reducer
const userReducer = userStore.reducer;
export default userReducer;
