import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import './Consultantdetail.css'
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
function Consultantdetail() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
<Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
<Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
    <div className="appoinmentheader">
    </div>
    </Grid>
    <Grid item xl={2} lg={2} md={1}></Grid>
    <Grid item xl={8} lg={8} md={10} sm={12} xs={12}>
    <div class="payement uk-card uk-card-default uk-width-1-1@m">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="imagearea  uk-width-auto">
                <img class="uk-border-circle circleimage"  src={beautiful} alt=""/>
            </div>
            <div class="textarea uk-width-expand">
              <br/>
              <div className="appoinmentdetails1">
                <h3 className='headappo'>POOJA ROY</h3>
                <div className='appos'>
                  <p className='appospara'><CalendarMonthIcon   sx={{color:'#23BDB8',fontSize:'25px'}}/><p className='apposparasub'> APPOINMENT DATE:21 JUNE 2022</p></p>
                  <p className='appospara1'><ScheduleIcon  sx={{color:'#23BDB8',fontSize:'25px'}}/> <p className='apposparasub1'>  APPOINMENT TIME:10:00 AM</p></p>
                </div>
         </div>
            <div className="paraaintro">
            <p1 className="intro">5 years of experience as a Salesman. Motivated, personable business professional with a talent for quickly identifying and resolving problems. Very flexible, versatile, and results-oriented with the ability to build productive relationships.</p1>
            </div>
            </div>
        </div>
    </div>
    <div class="payementverification uk-card-body">
    <Button variant="outlined" onClick={handleClickOpen} style={{color:'#0E314C'}}>
        PAYEMENT VERIFICATION
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Payment verification
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <img src="data:image/png;base64,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" alt=""/>
 &nbsp;
 &nbsp;
  <Button className="verified" variant="contained" endIcon={<CheckCircleIcon />}>
        Verified
      </Button>
          </Typography>
          
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
    <div class="  uk-card-footer   schedule">
<button class="buttonfaq"><span>SCHEDULE MEETING</span> </button>
    </div>
</div>
    </Grid>
<Grid item xl={2} lg={2} md={1}>
</Grid>
      </Grid>
</Box>
    </div>
  )
}
export default Consultantdetail