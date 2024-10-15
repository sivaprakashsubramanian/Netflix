import React from 'react'
import Login from './Login'
import Browser from './Browser'
import Header from './Header'
import Routerror from './Routerror'
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import SearchedMovie from './SearchedMovie'


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
        
        },
        {
            path:'/searchedMovie/:id',
            element:<SearchedMovie/>
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