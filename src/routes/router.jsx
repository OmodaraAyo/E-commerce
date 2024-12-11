import NavBar from "../components/NavBar";
import SignUp from "../components/SignUp";
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
        path:'signup',
        element: <SignUp/>
    }
]
export default ROUTES;