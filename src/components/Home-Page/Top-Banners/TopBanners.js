import BannerSwiper from "./Large-Top-Banners/BannerSwiper";
import SmallTopBanner from "./Small-Top-Banners/SmallTopBanner";
import { Box } from "@mui/material"
import smallBanner1 from '../../../assets/images/top-1.jpg'
import smallBanner2 from '../../../assets/images/top-2.jpg'

function TopBanners() {
  return (
    <>
        <Box>
            <BannerSwiper/>
        </Box>
        <Box>
            <SmallTopBanner image={smallBanner1} newArrival={true}/>
        </Box>
        <Box>
            <SmallTopBanner image={smallBanner2} newArrival={false}/>
        </Box>

            
    </>
  )
}

export default TopBanners