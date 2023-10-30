import { Box, Button, Typography } from '@mui/material'
import './airportBanner.css'

function AirportBanner() {
  return (
    <Box sx={{backgroundColor:"black", marginTop:"65px", width:"100%", height:"230px", display:"flex", justifyContent:"space-between", flexDirection:"column", alignItems:"center",padding:"0 0 24px 0", outline:"1px dashed grey", outlineOffset:"-5px"}}>
      <Box sx={{backgroundColor:"grey", width:"90%", textAlign:"center", padding:"26px", border:"1px solid white"}}>
        <Typography sx={{fontSize:"24px", fontWeight:"bold"}}>BLACK FRIDAY SALE!</Typography>
      </Box>
      <div className="marquee">
        <div>
          <span>PAY ONLY FOR YOUR LOVING CLOTHES</span>
        </div>
      </div>
      <Button sx={{backgroundColor:"white", color:"black",borderRadius:"0", width:"128px", height:"44px"}}>
        Shop now
      </Button>
    </Box>
  )
}

export default AirportBanner