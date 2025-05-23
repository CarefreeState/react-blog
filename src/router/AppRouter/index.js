// 路由配置
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import Home from "@/pages/Layout/Home";
import Article from "@/pages/Layout/Article";
import Publish from "@/pages/Layout/Publish";

import AuthRoute from "@/components/AuthRoute";

// 配置路由
import { createHashRouter, RouterProvider} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <AuthRoute><Layout /></AuthRoute>,
    children: [
      {
        index: true,
        // path: "/",
        element: <Home />,
      },
      {
        path: "/article",
        element: <Article />,
      },
      {
        path: "/publish",
        element: <Publish />,
      }
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
