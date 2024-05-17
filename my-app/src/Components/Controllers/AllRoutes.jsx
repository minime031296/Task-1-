import React from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import SignUpAsEditor from '../Pages/SignUpAsEditor'
import SignUpAsReader from '../Pages/SignUpAsReader'
import SignIn from '../Pages/SignIn'
import TaskPage from '../Pages/TaskPage'
import Logout from '../Pages/Logout'



const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Navbar/>}></Route>
        <Route path='/signupaseditor' element={<SignUpAsEditor/>}></Route>
        <Route path='/signupasreader' element={<SignUpAsReader/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/taskpage' element={<TaskPage/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
      </Routes>
    </Box>
  )
}

export default AllRoutes
