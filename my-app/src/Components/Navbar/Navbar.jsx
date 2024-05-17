import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';


const Appbar = styled(AppBar)`background-color: black`
const CustomButton = styled(Button)(
    {'&:hover': {
        color: "red"
    }}
)

const Navbar = () => {
  return (
    <Box>
      <Appbar position="static" >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 5 }}>
            My Application
          </Typography>
            <Link to="/signupaseditor">
                    <CustomButton color="inherit" variant="outlined" >Sign Up as Editor</CustomButton>
            </Link>

            <Link to="/signupasreader">
                    <CustomButton color="inherit" variant="outlined">Sign Up as Reader</CustomButton>
            </Link>
            
            <Link to="/signin">
                    <CustomButton color="inherit" variant="outlined">Sign In</CustomButton>
            </Link>
            
        </Toolbar>
      </Appbar>
    </Box>
  );
}

export default Navbar;
