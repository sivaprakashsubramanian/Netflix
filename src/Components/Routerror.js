import React from 'react'
import { useRouteError } from 'react-router-dom'

const Routerror = () => {
    const err=useRouteError();
  return (
    <div>
        <h1>OOPS somthing went wrong</h1>
        <p>{err.status}</p>
    </div>
  )
}

export default Routerror