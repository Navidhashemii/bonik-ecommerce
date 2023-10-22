import { Box, Typography } from "@mui/material"

function TopHeader() {
  return (
    <>
        <Box sx={{
        height:"42px",
        width:"100%",
        backgroundColor:"#0F3460",
        overflow:"hidden",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"0 16px"}} >
            <Box>
                <Typography sx={{
                fontSize:"24px",
                color:"#E94560",
                fontWeight:"bold",
                fontStyle:"italic"
                 }}>Bonik</Typography>
            </Box>
            <Box sx={{display:"flex",flexDirection:"row"}}>
              <Typography
              variant="subtitle2"
              sx={{
              color:"white",
              marginRight:"8px",
              fontWeight:"100"
              }}>EN</Typography>
              <Typography
              variant="subtitle2"
              sx={{
              color:"white",
              fontWeight:"100"
              }}>USD</Typography>
            </Box>


        </Box>   
    
    </>
  )
}

export default TopHeader