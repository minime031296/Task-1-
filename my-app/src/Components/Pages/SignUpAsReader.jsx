import React, { useReducer, useState } from 'react';
import { Box, InputBase, styled, Button, Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import bcrypt from "bcryptjs";

// Styled components
const StyledInputBase = styled(InputBase)`
  margin: 10px 0;
  padding: 5px;
  width: 300px;
  border: 1px solid black;
  border-radius: 25px;
`;

const BoxWrapper = styled(Box)`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ApplyButton = styled(Button)`
  margin-top: 15px;
  width: 200px;
  display: flex;
  margin-left: 30%;
  justify-content: center;
  align-content: center;
`;

// Reducer function
const reducer = (previousState, action) => {
  switch (action.type) {
    case "EMAIL":
      return { ...previousState, email: action.payload };
    case "PASSWORD":
      return { ...previousState, password: action.payload };
    case "ROLE":
      return { ...previousState, role: action.payload };
    default:
      return { ...previousState };
  }
};

const SignUpAsReader = () => {
  const [state, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
    role: ""
  });

  const [redirect, setRedirect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    try {
      dispatch({ type: event.target.name.toUpperCase(), payload: event.target.value });
    } catch (error) {
      throw new Error("target not detected");
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { email, password, role } = state;
    try {
      const HashedPassword = await bcrypt.hash(password, 10);
      localStorage.setItem('email', email);
      localStorage.setItem('password', HashedPassword);
      localStorage.setItem('role', role);

      console.log('User details saved to localStorage');
      setRedirect(true);
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
      alert('An error occurred while saving your data. Please try again.');
    }
  };

  if (redirect) {
    return <Navigate to={'/signin'} />;
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Sign Up as Reader</h1>
      <BoxWrapper>
        <form onSubmit={handleFormSubmit}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <Typography variant="body2">Email</Typography>
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell />
                <TableCell>
                  <StyledInputBase value={state.email} name="email" onChange={handleChange} type="email"
                    placeholder="Enter your email" />
                </TableCell>
              </TableRow>
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <Typography variant="body2">Password</Typography>
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell />
                <TableCell>
                  <StyledInputBase value={state.password} name="password" onChange={handleChange} type={showPassword ? "text" : "password"}
                    placeholder="Enter your password" />
                  <Typography variant="body2" onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                    {showPassword ? "Hide" : "Show"}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <Typography variant="body2">Role</Typography>
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell />
                <TableCell>
                  <StyledInputBase value={state.role} name="role" onChange={handleChange}
                    placeholder="Enter your Role" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <ApplyButton type="submit" variant="contained" sx={{ mt: 2 }}>Sign Up</ApplyButton>
        </form>
        <br />
        <Typography>Already Registered? <Link to="/signin">Sign In</Link></Typography>
      </BoxWrapper>
    </>
  );
};

export default SignUpAsReader;
