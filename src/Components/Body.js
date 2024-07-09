import React from 'react'
import Login from './Login'
import Browser from './Browser'
import Header from './Header'
import Routerror from './Routerror'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const approuter=createBrowserRouter([
    {
        path:'/',
        element:<Login/>,
        errorElement:<Routerror/>,
        children:[
            {
                path:'/',
                element:<Header/>
            }
        ]
    },
    {
        path:'/browser',
        element:<Browser/>
    }
])
const Body = () => {

  return (
    <div>
       <RouterProvider router={approuter}/>
    </div>
  )
}


export default Body