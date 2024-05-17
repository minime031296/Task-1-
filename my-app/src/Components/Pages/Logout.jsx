import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const Logout = () => {
    const [redirect, setRedirect] = useState(false)

    if(redirect) {
        return <Navigate to={"/"}/>
    }
  return (

    <div>
      
    </div>
  )
}

export default Logout
