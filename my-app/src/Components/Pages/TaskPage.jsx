import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';


const Appbar = styled(AppBar)`background-color: black`
const CustomButton = styled(Button)(
    {'&:hover': {
        color: "red"
    }}
)
const TaskPage = () => {
  return (
    <div>
      <Box>
      <Appbar position="static" >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 5 }}>
            My Application
          </Typography>
            
            <Link to="/logout">
                    <CustomButton color="inherit" variant="outlined">LogOut</CustomButton>
            </Link>
            
        </Toolbar>
      </Appbar>
    </Box>

    </div>
  )
}

export default TaskPage
