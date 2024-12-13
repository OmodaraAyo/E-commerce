import Header from "../components/Header";
import Login from "../auth/Login";
import NavBar from "../components/NavBar";
import SignUp from "../auth/SignUp";
import Layout from "../layout/Layout";

const ROUTES = [
    {
        path:'navbar',
        element: <NavBar/>
    },
    {
        path:"",
        element: <Layout/>
    },
    {
        path:'/signup',
        element: <SignUp/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path:"/home",
        element: <Header/>
    },
]
export default ROUTES;