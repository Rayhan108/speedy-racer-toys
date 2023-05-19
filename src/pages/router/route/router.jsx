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
import UpdateToy from "../../MyToys/UpdateToy/UpdateToy";
import ErrorPage from "../../ErrorPage/ErrorPage";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'details/:id',
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
        {
          path:'/update/:id',
          element:<UpdateToy></UpdateToy>,
          loader:({params})=>fetch(`http://localhost:5000/toys/home/${params.id}`)
        },
       
      ]
    },
  ]);

export default router;