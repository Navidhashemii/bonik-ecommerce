'use client'

import baner1 from '../assets/images/main-1.jpg'
import { Box, Typography } from '@mui/material'

import Image from 'next/image'


function Banner() {
  return (
    <Box sx={{position:"relative", width:"100%", maxWidth:"100%", aspectRatio:"70/45", height:"500px" }}>

        <Image
        src={baner1}
        fill
        alt='dfkm'
        sizes='(max-width: 768px) 100vh, 700px'
        priority
        style={{
          minWidth:"60em",
        }}
    
        />
        <Box sx={{position: 'absolute',width:"90%" , display:"flex", justifyContent:"center", flexDirection:"column",alignItems:"center", top: "45%",left: "50%",transform: "translate(-50%, -50%)"}}>
           <Typography sx={{ fontWeight:"100", fontSize:"28px", textAlign:"center"}}>Lifestyle Collection</Typography>
           <Typography sx={{ fontSize:"60px", textAlign:"center", fontWeight:"bold"}}>Men</Typography>
           <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"baseline", flexWrap:"nowrap"}}>
              <Typography sx={{ fontSize:"30px",textAlign:"center", marginRight:"10px"}}>SALE UP TO</Typography>
              <Typography sx={{ fontSize:"16px", textAlign:"center", color:"red"}}>30% OFF</Typography>
           </Box>
           <Typography sx={{ textAlign:"center", fontSize:"20px"}}>Get free shipping on orders over $99.00</Typography>

        </Box>
    </Box>
  )
}

export default Banner