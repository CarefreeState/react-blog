import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

const AppStore = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default AppStore;