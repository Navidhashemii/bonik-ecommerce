

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Divider, Typography } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';




function BenefitPart() {
  return (
    <Box sx={{ flexGrow: 1, marginTop:"32px" }}>
      <Grid container >
        <Grid xs={12}>
            <Paper elevation={0} sx={{height:"100px",display:"flex", justifyContent:"flex-start", alignItems:"center", padding:"0 40px"}}>
                <LocalShippingOutlinedIcon sx={{fontSize:"50px"}}/>
                <Box sx={{display:"flex", justifyContent:"center", alignItems:"flex-start", flexDirection:"column", marginLeft:"16px"}}>
                    <Typography sx={{fontSize:"18px"}}>Fast Delivery</Typography>
                    <Typography sx={{fontSize:"17px"}}>starts from $10</Typography>  
                </Box>
            </Paper>
        </Grid>
        <Grid xs={12}>
        <Paper elevation={0} sx={{height:"110px",display:"flex", justifyContent:"flex-start", alignItems:"center", padding:"0 40px"}}>
                <PaidOutlinedIcon sx={{fontSize:"50px"}}/>
                <Box sx={{display:"flex", justifyContent:"center", alignItems:"flex-start", flexDirection:"column", marginLeft:"16px"}}>
                    <Typography sx={{fontSize:"18px"}}>Money Guarantee</Typography>
                    <Typography sx={{fontSize:"17px"}}>7 Days Back</Typography>  
                </Box>
            </Paper>
        </Grid>
        <Grid xs={12}>
        <Paper elevation={0} sx={{height:"100px",display:"flex", justifyContent:"flex-start", alignItems:"center", padding:"0 40px"}}>
                <TimerOutlinedIcon sx={{fontSize:"50px"}}/>
                <Box sx={{display:"flex", justifyContent:"center", alignItems:"flex-start", flexDirection:"column", marginLeft:"16px"}}>
                    <Typography sx={{fontSize:"18px"}}>365 Days</Typography>
                    <Typography sx={{fontSize:"17px"}}>For free return</Typography>  
                </Box>
            </Paper>
        </Grid>
        <Grid xs={12}>
        <Paper elevation={0} sx={{height:"100px",display:"flex", justifyContent:"flex-start", alignItems:"center", padding:"0 40px"}}>
                <SecurityOutlinedIcon sx={{fontSize:"50px"}}/>
                <Box sx={{display:"flex", justifyContent:"center", alignItems:"flex-start", flexDirection:"column", marginLeft:"16px"}}>
                    <Typography sx={{fontSize:"18px"}}>Payment</Typography>
                    <Typography sx={{fontSize:"17px"}}>Secure system</Typography>  
                </Box>
            </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BenefitPart