import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
  return (
    <div className='section'>
   <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 2,
          width: 700,
          height: 300,
        },
      }}
    >
      <Paper elevation={0} />
      <Paper />
     
    </Box>
    </div>

  );
}
