import smallBanner1 from '../assets/images/top-1.jpg'
import smallBanner2 from '../assets/images/top-2.jpg'
import MainSwiper from "../components/MainSwiper";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material"


function TopBanners() {
  return (
    <Box>
        <Box>
            <MainSwiper/>
        </Box>
        <Box>
            <Box
                sx={{
                    position:"relative",
                    width:"100%",
                    maxWidth:"100%",
                    aspectRatio:"70/45",
                    minHeight:"250px",
                    marginTop:"25px"
                    }}
            >
                <Image
                 src={smallBanner1}
                 fill
                 alt='smallBanner'
                 sizes='(max-width: 768px) 100vh, 700px'
                 priority
                />
                <Box 
                    sx={{
                        position:'absolute',
                        width:"80%",
                        display:"flex",
                        flexDirection:"column",
                        top: "52%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                        }}
                >

                    <Typography sx={{fontWeight:"100",fontSize:"16px"}}>
                        NEW ARRIVALS
                    </Typography>

                    <Typography sx={{fontSize:"18px"}}>
                        SUMMER 
                        <br/>
                        SALE 20% OFF
                    </Typography>

                    <Button
                        variant="text"
                        size="small"
                        sx={{
                            width:"90px",
                            padding:"0",
                            marginTop:"25px",
                            color:"#E94560",
                            marginLeft:"-8px"
                            }}
                    >
                        Shop Now
                    </Button>

                </Box>
            </Box>

            <Box
                sx={{
                    position:"relative",
                    width:"100%",
                    maxWidth:"100%",
                    aspectRatio:"70/45",
                    minHeight:"250px",
                    marginTop:"25px"
                    }}
            >
                <Image
                 src={smallBanner2}
                 fill
                 alt='smallBanner'
                 sizes='(max-width: 768px) 100vh, 700px'
                 priority
                />
                <Box 
                    sx={{
                        position:'absolute',
                        width:"80%",
                        display:"flex",
                        flexDirection:"column",
                        top: "52%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                        }}
                >

                    <Typography sx={{fontWeight:"100",fontSize:"16px"}}>
                        GAMING 4K
                    </Typography>

                    <Typography sx={{fontSize:"18px"}}>
                        DESKTOPS & 
                        <br/>
                        LAPTOPS
                    </Typography>

                    <Button
                        variant="text"
                        size="small"
                        sx={{
                            width:"90px",
                            padding:"0",
                            marginTop:"25px",
                            color:"#E94560",
                            marginLeft:"-8px"
                            }}
                    >
                        Shop Now
                    </Button>

                </Box>
            </Box>

        </Box>
    </Box>
  )
}

export default TopBanners