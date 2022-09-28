import React from 'react' 
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './admintab.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';   
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Swal from 'sweetalert2'


import CameraAltIcon from '@mui/icons-material/CameraAlt';
//import penicon from '../../../Assets/userprofile/penicon.png';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState } from 'react';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';




function ConsultantTabPanel(props) {


 

  
  const { children, value, index, ...other } = props;

 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

ConsultantTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Consultanta11yProps(index) {
 

 

  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#23BDB8',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#F5FFFA",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export default function ConsultantVerticalTabs() {
  const [Consultantvalue, ConsultantsetValue] = React.useState(0);

  const ConsultanthandleChange = (event, newValue) => {
    ConsultantsetValue(newValue);
  }; 

  
   
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
 

  const [data,setData]=useState();
  console.log(data)
  
  
  const [openprofile, setOpenprofile] = React.useState(false);
  const handleOpen = () => setOpenprofile(true);
  const handleClose = () => setOpenprofile(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open, setOpen] = React.useState(false);
  const handleOpenprofile = () => setOpen(true);
  const handleCloseprofile = () => setOpen(false);


  return (
    
  <div>
    <div className='origConsultant'>
    <Box 
    className='ConsultantdetBox'
      sx={{ bgcolor: 'background.paper', display: 'flex'  }}
    >
    
      <Tabs  
      value={Consultantvalue}
       TabIndicatorProps={{ style: { background: "#23BDB8" } }} 
        orientation="vertical"
        variant="scrollable"
        onChange={ConsultanthandleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',
           "& button":{color:"#4a6f8a !important"},
           "& button:focus":{color:"#23BDB8 !important",backgroundColor:'#F5FFFA !important'},
           "& button:active":{color:"#23BDB8 !important",backgroundColor:'#F5FFFA !important'}, 
           "& button.Mui-selected":{color:"#23BDB8 !important",backgroundColor:'#F5FFFA !important'},
           }}
        className="consultantTab"   
      > 
      
            <Tab className="consultantDash" icon={<DashboardIcon className='consultantIcon1'/>} iconPosition="start" label="Dashboard" {...Consultanta11yProps(0)}  />
            <Tab className="consultantAppt" icon={ <EventNoteIcon className='consultantIcon2' />} iconPosition="start" label="User" {...Consultanta11yProps(1)} />
            <Tab className="consultantHis" icon={<HistoryIcon className='consultantIcon3' />} iconPosition="start" label="Consultant" {...Consultanta11yProps(2)} />
            
            <button style={{backgroundColor:'white'}} onClick={()=>{Swal.fire({
  title: 'Are you sure,you want to Logout?',
 
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#23BDB8',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes,Logout'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      
      {title: "Logout",
      text: "You are successfully Logout",
      icon: "success",
      confirmButtonText: 'Ok',
      confirmButtonColor: '#23BDB8',
    }
      
     
    ).then(function() {
      window.location = "/";
  })
  }
})}} className="consultantOut"><ExitToAppIcon className='consultantIcon5' />Logout
            
            </button>
       </Tabs>
        
      <ConsultantTabPanel className="ConsultantTabPanel1" value={Consultantvalue} index={0}>
      <Grid container className='origCons'>
        <Grid item sm={4} xs={12}>
        <Card  className="consultantCard1">
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-vector/businessman-planning-events-deadlines-agenda_74855-6274.jpg?size=626&ext=jpg&ga=GA1.2.1642244458.1661524207"
        alt="green iguana"
        className='consultantGraph1'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='consultantHeadGraph1'>
          New Task : 20
        </Typography>
        
      </CardContent>
      
    </Card>
        </Grid>
        <Grid item  sm={4} xs={12}>
        <Card   className="consultantCard2">
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-vector/hand-drawn-time-management-concept_52683-55407.jpg?size=626&ext=jpg&ga=GA1.2.1642244458.1661524207"
        alt="green iguana"
        className='consultantGraph2'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='consultantHeadGraph2'>
          Ongoing Task : 10
        </Typography>
        
      </CardContent>
       
    </Card>
        </Grid>
        <Grid item     sm={4} xs={12}>
        <Card   className="consultantCard3">
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?size=626&ext=jpg&ga=GA1.2.1642244458.1661524207"
        alt="green iguana"
        className='consultantGraph3'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='consultantHeadGraph3'>
          Done Task : 2
        </Typography>
        
      </CardContent>
       
    </Card>
        </Grid>
    </Grid>
    <Grid container>
    <Grid item xs={6}>
        <Card   className="consultantCard4">
          
            <CardMedia
        component="img"
        height="140"
        image="https://pic4.zhimg.com/v2-95b2415111e0f1d3380e19b484cc13d8_r.jpg?source=1940ef5c"
        alt="green iguana"
        className='consultantGraph4'
      />
         
          
          
            
      
    </Card>
    
    </Grid>
    <Grid item xs={6}>
        <Card   className="consultantCard5">
          
            <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-vector/woman-worker-analyzing-digital-data-charts-graphs_88138-705.jpg?size=626&ext=jpg&ga=GA1.2.1642244458.1661524207"
        alt="green iguana"
        className='consultantGraph5'
      />
         
          
          
            
      
    </Card>
    
    </Grid>
    
    
    </Grid> 

 
    
      </ConsultantTabPanel>
      <ConsultantTabPanel  className="ConsultantTabPanel2"  value={Consultantvalue} index={1}>
     


      </ConsultantTabPanel>
      <ConsultantTabPanel className="ConsultantTabPanel3"  value={Consultantvalue} index={2}>
      
 
      </ConsultantTabPanel>




{/*-----------------------------Profile-------------------------------------------------*/}

  <ConsultantTabPanel  className="ConsultantTabPanel4" value={Consultantvalue} index={3}>


      
         
      </ConsultantTabPanel>
       




     </Box> 
    </div>
           <div className='dupConsultant'>
           
           <Accordion>
        <AccordionSummary 
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='consultantAccordHead1'><DashboardIcon className='consultantAccordIcon1'/> Dashboard</Typography>
        </AccordionSummary>
        <AccordionDetails className='consultantAccordDet1'>
        <Grid container className='origCons'>
        <Grid item sm={4} xs={12}>
        <Card  className="consultantCard1">
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-vector/businessman-planning-events-deadlines-agenda_74855-6274.jpg?size=626&ext=jpg&ga=GA1.2.1642244458.1661524207"
        alt="green iguana"
        className='consultantGraph1'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='consultantHeadGraph1'>
          New Task : 20
        </Typography>
        
      </CardContent>
      
    </Card>
        </Grid>
        <Grid item  sm={4} xs={12} >
        <Card   className="consultantCard2">
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-vector/hand-drawn-time-management-concept_52683-55407.jpg?size=626&ext=jpg&ga=GA1.2.1642244458.1661524207"
        alt="green iguana"
        className='consultantGraph2'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='consultantHeadGraph2'>
          Ongoing Task : 10
        </Typography>
        
      </CardContent>
       
    </Card>
        </Grid>
        <Grid item     sm={4} xs={12}>
        <Card   className="consultantCard3">
      <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?size=626&ext=jpg&ga=GA1.2.1642244458.1661524207"
        alt="green iguana"
        className='consultantGraph3'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='consultantHeadGraph3'>
          Done Task : 2
        </Typography>
        
      </CardContent>
       
    </Card>
        </Grid>
    </Grid>
    <Grid container>
    <Grid item sm={6} xs={12}>
        <Card   className="consultantCard4">
          
            <CardMedia
        component="img"
        height="140"
        image="https://pic4.zhimg.com/v2-95b2415111e0f1d3380e19b484cc13d8_r.jpg?source=1940ef5c"
        alt="green iguana"
        className='consultantGraph4'
      />
         
          
          
            
      
    </Card>
    
    </Grid>
    <Grid item sm={6} xs={12}>
        <Card   className="consultantCard5">
          
            <CardMedia
        component="img"
        height="140"
        image="https://img.freepik.com/free-vector/woman-worker-analyzing-digital-data-charts-graphs_88138-705.jpg?size=626&ext=jpg&ga=GA1.2.1642244458.1661524207"
        alt="green iguana"
        className='consultantGraph5'
      />
         
          
          
            
      
    </Card>
    
    </Grid>
    
    
    </Grid> 

 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary 
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='consultantAccordHead2'> <EventNoteIcon className='consultantAccordIcon2' /> User</Typography>
        </AccordionSummary>
        <AccordionDetails className='consultantAccordDet2'>
          <Typography>
         
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary 
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className='consultantAccordHead3'><HistoryIcon className='consultantAccordIcon3' /> Consultant</Typography>
        </AccordionSummary>
        <AccordionDetails className='consultantAccordDet3'>
          <Typography>
        
   
          </Typography>
        </AccordionDetails>
      </Accordion>
     
         
          
      <Accordion>
        <AccordionSummary 
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <button className='consultantAccordHead5'><ExitToAppIcon className='consultantAccordIcon5' />Logout</button>
        </AccordionSummary>
        
      </Accordion>
      
           </div>
         
     </div>
  );
}
