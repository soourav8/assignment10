
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layouts/Main/Main";

import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Chef from "../Pages/Chef/Chef";
import PrivetRoute from "../PrivetRoute/PrivetRoute";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/chef/:id',
          element: <PrivetRoute><Chef></Chef></PrivetRoute> ,
         
          
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
            path: '/login',
            element : <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
  ],
  
},

  
  ]);


export default router;