// 路由配置
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";

// 配置路由
import { createHashRouter, RouterProvider} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
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
