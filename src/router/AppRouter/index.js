// 路由配置
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import AuthRoute from "@/components/AuthRoute";

// 配置路由
import { createHashRouter, RouterProvider} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <AuthRoute><Layout /></AuthRoute>,
    children: [
      
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default AppRouter;
