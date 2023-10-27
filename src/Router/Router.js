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



const router =createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/coures',element:<Course></Course>},
        {path:'/blogs',element:<Blogs></Blogs>},
        {path:'/allcoures/:id',element:<SpecificCoures></SpecificCoures>,
        loader:async({params})=>fetch(`http://localhost:5000/allcoures/${params.id}`)
    },
    {path:'/singup',element:<SingUp></SingUp>},
    {path:'/login',element:<Singin></Singin>},
    {path:'/aboutus',element:<AboutUs></AboutUs>},
    {path:'/checkout',element:<Orders></Orders>}
    ]}
])

export default router;