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
      <div className='consaltant_table'> 
    <Grid container>
    <Grid xl={2} lg={1} md={2}></Grid>
    <Grid xl={8} lg={10} md={8}>
  <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  align="left" className='textappoinhead'>NAME</StyledTableCell>
            <StyledTableCell align="left" className='textappoinhead'>DATE</StyledTableCell>
            <StyledTableCell align="left" className='textappoinhead'>TIME</StyledTableCell>
            <StyledTableCell align="right" className='textappoin'></StyledTableCell>
 
          </TableRow>
        </TableHead>
        <TableBody>
         
            <StyledTableRow >
              <StyledTableCell component="th" scope="row" className='textappoin'>
            Saljith 
              </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>12-august-2022 </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>11 00 </StyledTableCell>
            <StyledTableCell align="right" className='textappoin'><Link to="/faq"><button className='buttonconsult'>Invite</button></Link></StyledTableCell>
              
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
             Shahida jubil
              </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>12-august-2022 </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>11 00 </StyledTableCell>
            <StyledTableCell align="right" className='textappoin'><Link to="/faq"><button className='buttonconsult'>Invite</button></Link></StyledTableCell>
              
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
            Princy 
              </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>22-august-2022 </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>02 00 </StyledTableCell>
            <StyledTableCell align="right" className='textappoin'><Link to="/faq"><button className='buttonconsult'>Invite</button></Link></StyledTableCell>
              
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
            Anu Prins
              </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>12-September-2022 </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>11 00 </StyledTableCell>
            <StyledTableCell align="right"  className='textappoin'><Link to="/faq"><button className='buttonconsult'>Invite</button></Link></StyledTableCell>
              
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
            Mishana kp
              </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>12-august-2022 </StyledTableCell>
              <StyledTableCell  className='textappoin' align="left">11 00
               </StyledTableCell>
            <StyledTableCell align="right"><Link to="/faq"><button className='buttonconsult'>Invite</button></Link></StyledTableCell>
              
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
        Nandana Roy
              </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>9-july-2022 </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>11  00</StyledTableCell>
            <StyledTableCell align="right"  className='textappoin'><Link to="/faq"><button className='buttonconsult'>Invite</button></Link></StyledTableCell>
         
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
              Robert D. Buckland
              </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>12-august-2022 </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>02 00</StyledTableCell>
            <StyledTableCell align="right"  className='textappoin'><Link to="/faq"><button className='buttonconsult'>Invite</button></Link></StyledTableCell>
              
            </StyledTableRow>
            


        </TableBody>
      </Table>
    </TableContainer>
    </Grid><Grid xl={2} lg={1} md={2}></Grid> </Grid></div> 
     


      </ConsultantTabPanel>
      <ConsultantTabPanel className="ConsultantTabPanel3"  value={Consultantvalue} index={2}>
      <div className="historypage" >
<Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}> 
      <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="historyheader">
          <div className="historyheading">
<h1>APPOINTMENT HISTORY</h1>
</div>
        </div>
      </Grid>


        <Grid xl={2} lg={2} md={1} sm={1} xs={1}  ></Grid>
    <Grid xl={8} lg={8} md={10} sm={10} xs={10}>
      <br/>
  <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  align="left" className='textappoinhead'>NAME</StyledTableCell>
            <StyledTableCell align="left" className='textappoinhead'>DATE</StyledTableCell>
            <StyledTableCell align="left" className='textappoinhead'>EMAIL</StyledTableCell>
            <StyledTableCell align="left" className='textappoinhead'>AMOUNT</StyledTableCell>
            <StyledTableCell align="left" className='textappoinhead'>STATUS</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row" className='textappoin'>
            Saljith
              </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>12-august-2022 </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>saljith@gmail.com</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Rs 5000</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Pending</StyledTableCell>

            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
             Shahida jubil
              </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>12-august-2022 </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>shahidha@gmail.com</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Rs 7000</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Successful</StyledTableCell>

            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
            Princy
              </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>22-august-2022 </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>princy@gmail.com</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Rs 9000</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Failed</StyledTableCell>

            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
            Anu Prins
              </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>12-September-2022 </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>anu@gmail.com </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Rs 7500</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Successful</StyledTableCell>

               </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
            Mishana kp
              </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>12-august-2022 </StyledTableCell>
              <StyledTableCell  className='textappoin' align="left">mishana@gmail.com
               </StyledTableCell>
               <StyledTableCell align="left" className='textappoin'>Rs 8000</StyledTableCell>
               <StyledTableCell align="left" className='textappoin'>Successful</StyledTableCell>

            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
        Nandana Roy
              </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>9-july-2022 </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>nandan@gmail.com</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Rs 10000</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Failed</StyledTableCell>

            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
              Robert D. Buckland
              </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>12-august-2022 </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>robert@gmail.com</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Rs 4000</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Successful</StyledTableCell>

            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>

    <Grid item xl={2} lg={2} md={1} sm={1} xs={1}> 
    </Grid>
    <br/>
    </Grid>
    </Box>
     </div>
 
      </ConsultantTabPanel>




{/*-----------------------------Profile-------------------------------------------------*/}

  <ConsultantTabPanel  className="ConsultantTabPanel4" value={Consultantvalue} index={3}>


      <Box sx={{ flexGrow: 1 }} >
      <Grid  container spacing={2}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className='admintop'>
            </div>
          </Grid>
        <Grid item  xl={.5} lg={.05}>
          <Stack direction="row" alignItems="center" spacing={0}>  
            <IconButton className='adminimageuploadicon' aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
          </Stack>
        </Grid>
        <Grid item  xl={3} lg={3} md={3} sm={11.8} xs={11.5}>  
          <img className='adminprofileimgn' src='https://www.felicity.care/assets/images/homepage-slides/zoha-slide.webp' alt='counselor1'/>
            <br/>
            <ul className='adminulnamen'>
          <p ><b>PUJA ROY</b></p>
                <p className='adminguide'>Career Guide</p></ul>
        </Grid>


    <Grid item xl={7.8} lg={7.8} md={8.8} sm={11} xs={10}>
        <div className='adminviewsha'>
          <ul>
            <li>
          <p2 ><EmailIcon className='adminiconmail' alt="edu" id='iconimg'/>&nbsp; QUALIFICATION</p2>
          <li className='sublistq'>Masters in Business Administration</li>
      </li>
      <li>
        <p2 >< EmailIcon className='adminiconmail'  />&nbsp; EMAIL</p2>
        <li className='sublistq'>poojaroy@gmail.com</li>
        </li>
        <li>
        <p2 > <LocalPhoneIcon className='adminiconphone'   /> &nbsp;PHONE</p2>
        <li className='sublistq'>&nbsp;9747365632</li>
        </li>
       
        </ul>
      </div>
      <br/>
    </Grid>

    <Grid item xl={.2} lg={.2} md={.2} sm={.2} xs={2}>

          
          <Button onClick={handleOpenprofile}><CreateIcon style={{color:'#23BDB8'}}  className='adminediticon'/> </Button>
                <Modal
                        open={open}
                        onClose={handleCloseprofile}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      
                      >
                        <Box sx={style} className='profileeditmodal'>
                          <Typography id="modal-modal-title" variant="h6" component="h2">
                          <li>
                          <p2>Qualification</p2><br/>
                          <TextField className="editbox" type="text" name="Qualification" placeholder="Qualification "  variant="outlined" />
                          </li>
                          <br/>
                          <li>
                          <p2>Email</p2><br/>
                          <TextField className="editbox" type="text" name="Email" placeholder="Email"  variant="outlined" />
                          </li>
                          <br/>
                          <li>
                          <p2>Contact Number</p2><br/>
                    <TextField className="editbox" type="text" name="Contact Number" placeholder="Contact Number"  variant="outlined" />        </li>
                      <br/>
                        <li>
                      <p2>About</p2>
                          <Box className="messagebox" component="form" sx={{
                        '& .MuiTextField-root': { m: 0, width:'300px',},}}noValidate autoComplete="off">
                      <TextField
                        className="editabout"
                          label="About"
                          placeholder="About"
                          multiline
                          rows={4}
                        />
                        </Box>
                        </li>
                          </Typography>
                          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          <br/>
                     <div className='editbutton'>
                        <button class="buttonedit" onClick={handleOpen2}><span>Save Changes</span> </button>
                            <Modal
                              open={open2}
                              onClose={handleClose2}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                            <Box sx={style} className="updateModal">
                              <Typography id="modal-modal-title" variant="h6" component="h2" className='modalupdatehead'>
                              Updated successfully!!!
                              
                              <CheckCircleOutlineIcon  className='checkIconUser'/>
                              
                              <br/>
                              <Link to="/consultantdetails"><Button style={{backgroundColor:'#d64242',color:'#F5FFFA'}}>Okay</Button></Link>
                              </Typography>
                            </Box>
                          </Modal>
                      </div>
                    </Typography>
                  </Box>
                </Modal>
            

    </Grid>
         
<Grid item xl={3.9} lg={3.9} md={3.6} sm={0.7} xs={0.85} ></Grid>
          <Grid item xl={7} lg={7} md={7.7} sm={10.8} xs={10.3} className='adminaboutcounsellor'>
          <h3 style={{color:'#0e314c'}}><b>About</b></h3>
                <p >
              Have been conducting career guidance workshops in 30 schools in Mumbai, Pune, 
                Panchgani, Nasik and Goa for the past 5 years Have engaged with approx. 3,000 students both 
                collectively in groups as well as individually for various programs Deep knowledge of various
                 career options available and the course details Handled more than 5000
                 career queries on email over the last 5 years Commerce Graduate and an MBA in Finance from IIM Indore.</p>
                 </Grid>

      </Grid>
      </Box>

         
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
          <Typography className='consultantAccordHead2'> <EventNoteIcon className='consultantAccordIcon2' /> Appointments</Typography>
        </AccordionSummary>
        <AccordionDetails className='consultantAccordDet2'>
          <Typography>
          <div className='consaltant_table'> 
    <Grid container>
    <Grid xl={2} md={1} sm={12}></Grid>
    <Grid xl={8} md={10} sm={12}>
  <TableContainer component={Paper} className="tableconsultant">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  align="left" className='textappoinhead'>NAME</StyledTableCell>
            <StyledTableCell align="left" className='textappoinhead'>DATE</StyledTableCell>
            <StyledTableCell align="left" className='textappoinhead'>TIME</StyledTableCell>
            <StyledTableCell align="right" className='textappoin'></StyledTableCell>
 
          </TableRow>
        </TableHead>
        <TableBody>
         
            <StyledTableRow >
              <StyledTableCell component="th" scope="row" className='textappoin'>
            Saljith 
              </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>12-august-2022 </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>11 00 </StyledTableCell>
            <StyledTableCell align="right" className='textappoin'><Link to="/faq"><button className='buttonconsult'>Invite</button></Link></StyledTableCell>
              
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
             Shahida jubil
              </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>12-august-2022 </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>11 00 </StyledTableCell>
            <StyledTableCell align="right" className='textappoin'><Link to="/faq"><button className='buttonconsult'>Invite</button></Link></StyledTableCell>
              
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
            Princy 
              </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>22-august-2022 </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>02 00 </StyledTableCell>
            <StyledTableCell align="right" className='textappoin'><Link to="/faq"><button className='buttonconsult'>Invite</button></Link></StyledTableCell>
              
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
            Anu Prins
              </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>12-September-2022 </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>11 00 </StyledTableCell>
            <StyledTableCell align="right"  className='textappoin'><Link to="/faq"><button className='buttonconsult'>Invite</button></Link></StyledTableCell>
              
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
            Mishana kp
              </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>12-august-2022 </StyledTableCell>
              <StyledTableCell  className='textappoin' align="left">11 00
               </StyledTableCell>
            <StyledTableCell align="right"><Link to="/faq"><button className='buttonconsult'>Invite</button></Link></StyledTableCell>
              
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
        Nandana Roy
              </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>9-july-2022 </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>11  00</StyledTableCell>
            <StyledTableCell align="right"  className='textappoin'><Link to="/faq"><button className='buttonconsult'>Invite</button></Link></StyledTableCell>
         
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
              Robert D. Buckland
              </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>12-august-2022 </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>02 00</StyledTableCell>
            <StyledTableCell align="right"  className='textappoin'><Link to="/faq"><button className='buttonconsult'>Invite</button></Link></StyledTableCell>
              
            </StyledTableRow>
            


        </TableBody>
      </Table>
    </TableContainer>
    </Grid> 
    <Grid xl={2} md={1} sm={.2}></Grid></Grid></div> 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary 
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className='consultantAccordHead3'><HistoryIcon className='consultantAccordIcon3' /> History</Typography>
        </AccordionSummary>
        <AccordionDetails className='consultantAccordDet3'>
          <Typography>
          <div className="historypage" >
<Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}> 
      <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="historyheader">
          <div className="historyheading">
<h1>APPOINTMENT HISTORY</h1>
</div>
        </div>
      </Grid>


        <Grid xl={2} lg={2} md={1} sm={1} xs={1}  ></Grid>
    <Grid xl={8} lg={8} md={10} sm={10} xs={10}>
      <br/>
  <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  align="left" className='textappoinhead'>NAME</StyledTableCell>
            <StyledTableCell align="left" className='textappoinhead'>DATE</StyledTableCell>
            <StyledTableCell align="left" className='textappoinhead'>EMAIL</StyledTableCell>
            <StyledTableCell align="left" className='textappoinhead'>AMOUNT</StyledTableCell>
            <StyledTableCell align="left" className='textappoinhead'>STATUS</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row" className='textappoin'>
            Saljith
              </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>12-august-2022 </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>saljith@gmail.com</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Rs 5000</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Pending</StyledTableCell>

            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
             Shahida jubil
              </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>12-august-2022 </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>shahidha@gmail.com</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Rs 7000</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Successful</StyledTableCell>

            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
            Princy
              </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>22-august-2022 </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>princy@gmail.com</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Rs 9000</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Failed</StyledTableCell>

            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
            Anu Prins
              </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>12-September-2022 </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>anu@gmail.com </StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Rs 7500</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Successful</StyledTableCell>

               </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
            Mishana kp
              </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>12-august-2022 </StyledTableCell>
              <StyledTableCell  className='textappoin' align="left">mishana@gmail.com
               </StyledTableCell>
               <StyledTableCell align="left" className='textappoin'>Rs 8000</StyledTableCell>
               <StyledTableCell align="left" className='textappoin'>Successful</StyledTableCell>

            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
        Nandana Roy
              </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>9-july-2022 </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>nandan@gmail.com</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Rs 10000</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Failed</StyledTableCell>

            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row"  className='textappoin'>
              Robert D. Buckland
              </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>12-august-2022 </StyledTableCell>
              <StyledTableCell align="left"  className='textappoin'>robert@gmail.com</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Rs 4000</StyledTableCell>
              <StyledTableCell align="left" className='textappoin'>Successful</StyledTableCell>

            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>

    <Grid item xl={2} lg={2} md={1} sm={1} xs={1}> 
    </Grid>
    <br/>
    </Grid>
    </Box>
     </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary 
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className='consultantAccordHead4'><AccountCircleIcon className='consultantAccordIcon4' /> Profile</Typography>
        </AccordionSummary>



        <AccordionDetails className='consultantAccordDet4'>
          <Typography>
          <Box sx={{ flexGrow: 1 }} >
     <Grid  container spacing={2}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className='admintop'>
            </div>
          </Grid>
          <Grid item  xl={.05} lg={.05}md={0.05}sm={4} xs={1.5}></Grid>
        <Grid item  xl={.05} lg={.05}md={.05}sm={.1}>
          <Stack direction="row" alignItems="center" spacing={0}>  
            <IconButton className='adminimageuploadicon' aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
          </Stack>
        </Grid>
        <Grid item  xl={3} lg={3} md={2.8} sm={4} xs={12}>  
          <img className='adminprofileimgn' src='https://www.felicity.care/assets/images/homepage-slides/zoha-slide.webp' alt='counselor1'/>
            <br/>
            <ul className='adminulnamen'>
          <p ><b>PUJA ROY</b></p>
                <p className='adminguide'>Career Guide</p></ul>
        </Grid>


    <Grid item xl={7.8} lg={7.8} md={8} sm={10.8} xs={10.5}>
        <div className='adminviewsha'>
          <ul>
            <li>
          <p2 ><EmailIcon className='adminiconmail' alt="edu" id='iconimg'/> QUALIFICATION</p2>
          <li className='sublistq'>Masters in Business Administration</li>
      </li>
      <li>
        <p2 >< EmailIcon className='adminiconmail'  /> EMAIL</p2>
        <li className='sublistq'>poojaroy@gmail.com</li>
        </li>
        <li>
        <p2 > <LocalPhoneIcon className='adminiconphone'   /> &nbsp;PHONE</p2>
        <li className='sublistq'>&nbsp;9747365632</li>
        </li>
        </ul>
      </div>
      <br/>
    </Grid>

    <Grid item xl={.2} lg={.2} md={.1} sm={.8} xs={1.2}>

          
          <Button onClick={handleOpenprofile} ><CreateIcon style={{color:'#23BDB8'}} className='adminediticon'/> </Button>
                <Modal
                        open={open}
                        onClose={handleCloseprofile}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      
                      >
                        
                        <Box sx={style} className='profileeditmodal'>
                          <Typography id="modal-modal-title" variant="h6" component="h2">
                          <li>
                          <p2>Qualification</p2><br/>
                          <TextField className="editbox" type="text" name="Qualification" placeholder="Qualification "  variant="outlined" />
                          </li>
                          <br/>
                          <li>
                          <p2>Email</p2><br/>
                          <TextField className="editbox" type="text" name="Email" placeholder="Email"  variant="outlined" />
                          </li>
                          <br/>
                          <li>
                          <p2>Contact Number</p2><br/>
                    <TextField className="editbox" type="text" name="Contact Number" placeholder="Contact Number"  variant="outlined" />        </li>
                      <br/>
                        <li>
                      <p2>About</p2>
                          <Box className="messagebox" component="form" sx={{
                        '& .MuiTextField-root': { m: 0, width:'300px',},}}noValidate autoComplete="off">
                      <TextField
                        className="editabout"
                          label="About"
                          placeholder="About"
                          multiline
                          rows={4}
                        />
                        </Box>
                        </li>
                          </Typography>
                          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          <br/>
                     <div className='editbutton'>
                        <button class="buttonedit" onClick={handleOpen2}><span>Save Changes</span> </button>
                            <Modal
                              open={open2}
                              onClose={handleClose2}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                            <Box sx={style} className="updateModal">
                              <Typography id="modal-modal-title" variant="h6" component="h2" className='modalupdatehead'>
                              Updated successfully!!!
                              
                              <CheckCircleOutlineIcon  className='checkIconUser'/>
                             
                              {/* <Link to="/consultantdetails"><Button style={{backgroundColor:'#23BDB8',color:'#F5FFFA'}}>Okay</Button></Link> */}
                              </Typography>
                            </Box>
                          </Modal>
                      </div>
                    </Typography>
                  </Box>
                </Modal>
            

    </Grid>
         
<Grid item xl={3.7} lg={3.9} md={3.6} sm={.7} xs={1} ></Grid>
          <Grid item xl={7} lg={7} md={7.7} sm={10.6} xs={10} className='adminaboutcounsellor'>
          <h3 style={{color:'#0e314c'}}><b>About</b></h3>
                <p >
              Have been conducting career guidance workshops in 30 schools in Mumbai, Pune, 
                Panchgani, Nasik and Goa for the past 5 years Have engaged with approx. 3,000 students both 
                collectively in groups as well as individually for various programs Deep knowledge of various
                 career options available and the course details Handled more than 5000
                 career queries on email over the last 5 years Commerce Graduate and an MBA in Finance from IIM Indore.</p>
                 </Grid>

      </Grid>
      </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary 
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <button className='consultantAccordHead5'><ExitToAppIcon className='consultantAccordIcon5' />Signout</button>
        </AccordionSummary>
        
      </Accordion>
      
           </div>
         
     </div>
  );
}
