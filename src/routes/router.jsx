import NavBar from "../components/NavBar";
import Layout from "../layout/Layout";

const ROUTES = [
    {
        path:'navbar',
        element: <NavBar/>
    },
    {
        path:"",
        element: <Layout/>
    }
]
export default ROUTES;