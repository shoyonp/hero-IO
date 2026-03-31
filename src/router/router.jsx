import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import AppDetail from "../pages/AppDetail";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    // errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "installation",
        loader: async () => {
          const res = await fetch("/apps.json");
          return res.json();
        },
        Component: Installation,
      },
      {
        path: "appDetail/:id",
        loader: async () => {
          const res = await fetch("/apps.json");
          return res.json();
        },
        Component: AppDetail,
      },
      {
        path: "*",
        element: <ErrorPage/>
      },
    ],
  },
]);

export default router;
