import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Layout from "../layout/Layout";
import ViewAll from "../pages/ViewAll";
import ProductDetailPage from "../pages/ProductDetailPage";
import Cart from "../pages/cart/Cart";
import Profile from "../pages/profile/Profile";

const ROUTES = [
    {
        path:"/",
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
    },
    {
        path: "/cart",
        element: <Cart/>
    },
    {
        path: "/profile",
        element: <Profile/>
    }
]
export default ROUTES;