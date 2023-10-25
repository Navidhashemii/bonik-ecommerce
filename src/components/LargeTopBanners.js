'use client'


import { Box, Typography, Button } from '@mui/material'
import Image from 'next/image'


function LargeTopBanners({generic, img, available}) {
  
  return (
    <Box
      sx={{position:"relative",
      width:"100%",
      maxWidth:"100%",
      aspectRatio:"70/45",
      height:"500px" }}>

        <Image
          src={img}
          fill
          alt='largeBanner'
          sizes='(max-width: 768px) 100vh, 700px'
          priority
          style={{
            minWidth:"60em",
          }}
        />

        <Box 
          sx={{position:'absolute',
          width:"90%",
          display:"flex",
          justifyContent:"center",
          flexDirection:"column",
          alignItems:"center",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)"}}>

           <Typography
              sx={{fontWeight:"100",
              fontSize:"30px",
              textAlign:"center"}}>Lifestyle Collection</Typography>

           <Typography
              sx={{fontSize:"60px",
              textAlign:"center",
              fontWeight:"bold"}}>{generic}</Typography>

           <Box
              sx={{display:"flex",
              flexDirection:"row",
              justifyContent:"center",
              alignItems:"baseline",
              flexWrap:"nowrap"}}>

              <Typography
              sx={{fontSize:"30px",
              textAlign:"center",
              marginRight:"10px"}}>SALE UP TO</Typography>

              <Typography
              sx={{fontSize:"18px",
              textAlign:"center",
              color:"#E94560"}}>50% OFF</Typography>

           </Box>

           <Typography
              sx={{textAlign:"center",
              fontSize:"20px"}}>Get free shipping on orders over $99.00</Typography>

            {available ? 
              <Button
                variant='contained'
                size='large'
                sx={{marginTop:"40px",
                backgroundColor:"#E94560",
                color:"white"}}
              >
                Shop Now
              </Button>
              : 
              <Typography
                sx={{fontSize:"28px",
                marginTop:"40px",
                color:"#E94560"}}
              >
                Coming Soon...
              </Typography> }

            

        </Box>
    </Box>
  )
}

export default LargeTopBanners