import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import './Userdetail.css';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Userdetail() {
  return (
      <div>
          <div className='detailedbox1'>
             <Box className='mainbox1'
                  sx={{
                  width: 1000,
                  height: 550,
                  backgroundColor: 'white',
                  }}>
                  <Grid container rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                      <Grid item xs={6}>
                          <Card className='cardone'>
                            <CardActionArea>
                                <CardMedia component="img" image="https://www.w3schools.com/howto/img_avatar2.png" alt="person"/>
                                    <CardContent className='cardContentone'>
                                        <Typography variant="bodytwo" >
                                              <h3 className='cardonehead'>LEENA JOHN</h3>
                                              {/* <p className='calicon'><CalendarMonthIcon   sx={{color:'#23BDB8',fontSize:'25px'}}/><p className='calparasub'> APPOINMENT DATE:21 JUNE 2022</p></p>
                                              <p className='sheicon'><ScheduleIcon  sx={{color:'#23BDB8',fontSize:'25px'}}/> <p className='sheparasub'>  APPOINMENT TIME:10:00 AM</p></p> */}
                                              <p className='emailicon1'><EmailIcon   sx={{color:'#23BDB8',fontSize:'25px'}}/> <p1 className="intro1">Leenajohn@gamil.com</p1></p>
                                              <p className='telephone1'><PhoneIcon  sx={{color:'#23BDB8',fontSize:'25px'}}/><p1 className="number1">+41-45766879789</p1></p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                          </Card>
                      </Grid>
                  </Grid>

                  <div className='secondaryboxsdet'>
                    <Grid container spacing={3}>
                      <Grid item xs={10}>
                      <Card className='cardtwo'>
                            <CardActionArea>
                                    <CardContent className='cardContenttwo'>
                                        <Typography variant="body2" >
                                              <h3 className='cardtwohead'>Manage Account</h3>
                                              {/* <p className='actpara'>Active account    */}
                                              
                                              <Button className="actbutton1" variant="contained" sx={{background:'#a30000'}}>Deactivate Account</Button>
                                              <br/>
                                              {/* </p> */}
                                              {/* <p className='blkpara'>Blocked account    */}
                                             
                                              <Button className="blkbutton1" variant="contained" sx={{background:'#228c22'}}>Unblock Account</Button>
                                              {/* </p> */}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                          </Card>
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs={10}>
                      <Card className='cardthree'>
                            <CardActionArea>
                                    <CardContent className='cardContentthree'>
                                        <Typography variant="body2" >
                                              <h3 className='cardthreehead'>Appoinment History</h3>
                                              <p className='compara1'>Completed Appoinment   
                                              <p className='comnum1'>04</p>
                                              </p>
                                              <p className='uppara1'>Upcoming Appoinment 
                                              <p className='comnum1'>01</p>
                                              </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                          </Card>
                      </Grid>
                    </Grid>
                    </div>
                </Box>
          </div>
      </div>
  );
}
