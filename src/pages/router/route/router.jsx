import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../../../layout/Main/MainLayout";
import Home from "../../Home/Home/Home";
import Login from "../../Home/Login/Login";
import Registration from "../../Home/Registration/Registration";
import AddToy from "../../AddToy/AddToy";
import Details from "../../Details/Details";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import AllToys from "../../AllToys/AllToys";
import MyToys from "../../MyToys/MyToys";
import Blog from "../../Blog/Blog";

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
            path:'/:id',
            element:<PrivetRoute><Details></Details></PrivetRoute>,
            loader:({params})=>fetch(`http://localhost:5000/toys/home/${params.id}`)
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
            element:<PrivetRoute><AddToy></AddToy></PrivetRoute>
        },
        {
            path:'/myToys',
            element:<PrivetRoute><MyToys></MyToys></PrivetRoute>
        },
        {
            path:'/allToys',
            element:<AllToys></AllToys>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
      ]
    },
  ]);

export default router;