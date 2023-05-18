import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../../../layout/Main/MainLayout";
import Home from "../../Home/Home/Home";
import Login from "../../Home/Login/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
      ]
    },
  ]);

export default router;