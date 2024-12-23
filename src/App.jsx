import {React, useEffect} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ROUTES from "./routes/router"
import { useDispatch } from 'react-redux'
import { login } from './auth/authSlice'
import { ToastContainer } from 'react-toastify'

const routes = createBrowserRouter([...ROUTES])

const App = () => {
  const dispatch = useDispatch();

  useEffect(() =>{
    const email = localStorage.getItem("email")
    const password = localStorage.getItem("password")
    const isAuthenticated = localStorage.getItem("isAuthenticated")

    if(isAuthenticated && email && password){
      dispatch(login({email, password}))
    }
  }, [dispatch])
  
  return (
    <div>
      <ToastContainer/>
       <RouterProvider router={routes}/>
    </div>
  )
}

export default App
