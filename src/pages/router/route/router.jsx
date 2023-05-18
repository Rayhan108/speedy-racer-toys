import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../../../layout/Main/MainLayout";
import Home from "../../Home/Home/Home";
import Login from "../../Home/Login/Login";
import Registration from "../../Home/Registration/Registration";
import AddToy from "../../Home/AddToy/AddToy";

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
        {
            path:'/register',
            element:<Registration></Registration>
        },
        {
            path:'/addToy',
            element:<AddToy></AddToy>
        },
      ]
    },
  ]);

export default router;