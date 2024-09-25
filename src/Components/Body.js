import React, { useEffect } from 'react'
import Login from './Login'
import Browser from './Browser'
import Header from './Header'
import Routerror from './Routerror'
import { createBrowserRouter,RouterProvider, useNavigate } from 'react-router-dom';
import {auth} from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/slice'


const Body = () => {

    const approuter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>,
            errorElement:<Routerror/>,
            children:[
                {
                    path:'/',
                    element:<Header/>
                },
              
            ]
        },
        {
          
            path:'/browser',
            element:<Browser/>
        
        }
        
    ]);
    // const dispatch=useDispatch();
    // const navigate=useNavigate()
   

  return (
    <div>
       <RouterProvider router={approuter}/>
    </div>
  )
}


export default Body