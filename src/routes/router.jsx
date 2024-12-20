import Header from "../components/Header";
import Login from "../auth/Login";
import NavBar from "../components/NavBar";
import SignUp from "../auth/SignUp";
import Layout from "../layout/Layout";
import ViewAll from "../pages/ViewAll";
import ProductDetailPage from "../pages/ProductDetailPage";

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
        element: <Layout/>
    },
    {
        path:"/home/all-product",
        element: <ViewAll/>
    },
    {
        path: "/product/:productId",
        element: <ProductDetailPage />
    }
]
export default ROUTES;