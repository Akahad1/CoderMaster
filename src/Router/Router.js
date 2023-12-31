import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Layout/Main";
import Home from "../Component/Pages/Home/Home";
import Course from "../Component/Pages/Course/Course";
import Blogs from "../Component/Pages/Blogs/Blogs";
import SpecificCoures from "../Component/Pages/Course/SpecificCoures/SpecificCoures";
import SingUp from "../Component/Authentication/SingUp/SingUp";
import Singin from "../Component/Authentication/Singin/Singin";
import AboutUs from "../Component/Pages/AboutUs/AboutUs";
import Orders from "../Component/Pages/Orders/Orders";
import SuccessFullPayment from "../Component/Pages/Course/SuccessFullPayment/SuccessFullPayment";
import FailPayment from "../Component/Pages/Course/SuccessFullPayment/FailPayment";
import PrivetRoute from "./PrivetRoute";
import MyClass from "../Component/Pages/MyClass/MyClass";
import ShowCartCoures from "../Component/Pages/Course/ShowCartCoures/ShowCartCoures";
import ShowMyClass from "../Component/Pages/MyClass/ShowMyClass";



const router =createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/coures',element:<Course></Course>},
        {path:'/blogs',element:<Blogs></Blogs>},
        {path:'/allcoures/:id',element:<PrivetRoute>
            <SpecificCoures></SpecificCoures>
        </PrivetRoute>,
        loader:async({params})=>fetch(`https://coder-master-server-b6ai6s7ms-akahad1.vercel.app/allcoures/${params.id}`)
    },
        {path:'/chackout/:id',element:<PrivetRoute><Orders></Orders></PrivetRoute>,
        loader:async({params})=>fetch(`https://coder-master-server-b6ai6s7ms-akahad1.vercel.app/allcoures/${params.id}`)
    },
    {path:'/singup',element:<SingUp></SingUp>},
    {path:'/login',element:<Singin></Singin>},
    {path:'/aboutus',element:<AboutUs></AboutUs>},
    {path:'/payment/sucess/:tranId',element:<SuccessFullPayment></SuccessFullPayment>},
    {path:'/payment/fail/:tranId',element:<FailPayment></FailPayment>},
    {path:'/myclass',element:<PrivetRoute><MyClass></MyClass></PrivetRoute>},
    {path:'/myclass/cart',element:<ShowMyClass></ShowMyClass>},
    
    ]}
])

export default router;