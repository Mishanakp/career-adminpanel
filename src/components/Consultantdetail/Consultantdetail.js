import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Consultantdetail.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <div className='grid'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
          <Item>
              <img className='imageone' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ6Yf7nJpw2TLXEnKYwgtQNWYLcaeO0Kiw7Q&usqp=CAU"></img>
              <h4 className='headone'>McKinsey</h4>
              <h5 className='headpara'>McKinsey@gmail.com</h5>
              <h5 className='headnum'>+04679754435</h5>
          </Item>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Box>
    </div>
  );
}
