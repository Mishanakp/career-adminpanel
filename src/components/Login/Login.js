// import React from 'react'

// function Login() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Login

import React, { Component } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Dialog from '@mui/material/Dialog';
import { DialogActions } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './Login.css'
// import Headerlogin from "../Compnent/Header/Headerlogin";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
class Loginpage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
      open: false
    };
  }
  setUsername = event => {
    this.setState({
      username: event.target.value
    });
  };
  setPassword = event => {
    this.setState({
      password: event.target.value
    });
  };
  signIn = () => {
    if (this.state.username === "websouladmin" && this.state.password === "password") {
      window.open("/homepage", "_self");
    } else {
      this.setState({
        open: true,
        message: "Incorrect Username or Password!"
      });
    }
  };
  handleClose = () => {
    this.setState({
      open: false
    });
  };
  render() {
  return (
    <div>
     {/* <div><Headerlogin/></div> */}
      <div className='career' >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item lg={3.5} md={2.5} sm={2.4}  > </Grid>
          <Grid item lg={5.2} md={7.5} sm={7.6} >
            <Item id='card'>
               <p className="username" id="use">Username
               </p>
               <TextField  // pass down to FormLabel as children
    name="Username"
              placeholder= 'Username'
              margin="normal"
              required
              onChange={this.setUsername}
              value={this.state.username}
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
             <p className="username">Password</p>
             <TextField
             id="input-with-icon-textfield"
             variant="outlined"
              placeholder="Password"
              margin="normal"
              required
              type="password"
              onChange={this.setPassword}
              value={this.state.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   <LockIcon/>
                  </InputAdornment>
                ),
              }}
            />
    <br/>
             <Button
              variant="contained"
              id="button"
              onClick={() => {
                this.signIn();
              }}
              >
                Login</Button>
              <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {this.state.message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Okay
              </Button>
            </DialogActions>
          </Dialog>
            </Item>
          </Grid>
        </Grid>
</Box>
    </div>
    <div className='career1' >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={10} >
            <Item id='card'>
               <p className="username" id="use">Username
               </p>
               <TextField  // pass down to FormLabel as children
    name="UserName"
              placeholder= 'username'
              margin="normal"
              required
              onChange={this.setUsername}
              value={this.state.username}
              id="input-with-icon-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
             <p className="username">Password</p>
             <TextField
             id="input-with-icon-textfield"
             variant="outlined"
              placeholder="Password"
              margin="normal"
              required
              type="password"
              onChange={this.setPassword}
              value={this.state.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   <LockIcon/>
                  </InputAdornment>
                ),
              }}
            />
    <br/>
             <Button
              variant="contained"
              id="button"
              onClick={() => {
                this.signIn();
              }}
              >
                Login</Button>
              <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {this.state.message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Okay
              </Button>
            </DialogActions>
          </Dialog>
            </Item>
          </Grid>
        </Grid>
</Box>
    </div>
    </div>
  );
}
}
export default Loginpage






















