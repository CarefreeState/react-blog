// 路由配置
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import AuthRoute from "@/components/AuthRoute";

// 配置路由
import { createHashRouter, RouterProvider} from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("@/pages/Layout/Home"))
const Article = lazy(() => import("@/pages/Layout/Article"))
const Publish = lazy(() => import("@/pages/Layout/Publish"))

const router = createHashRouter([
  {
    path: "/",
    element: <AuthRoute><Layout /></AuthRoute>,
    children: [
      {
        index: true,
        // path: "/",
        element: <Suspense fallback={'加载中'}><Home /></Suspense>,
      },
      {
        path: "/article",
        element: <Suspense fallback={'加载中'}><Article /></Suspense>,
      },
      {
        path: "/publish",
        element: <Suspense fallback={'加载中'}><Publish /></Suspense>,
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
export { router }

export default AppRouter
