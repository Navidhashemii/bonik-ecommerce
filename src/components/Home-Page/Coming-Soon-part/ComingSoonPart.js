import { Box } from '@mui/material'
import ComingSoonBanner from './ComingSoonBanner'
import csbanner1 from '../../../assets/images/coming-soon1.jpg'
import csbanner2 from '../../../assets/images/coming-soon2.jpg'
import csbanner3 from '../../../assets/images/coming-soon3.jpg'
import styles from './ComingSoonPart.module.css'



const csBanners = [
    {image: csbanner1, blackBg: false, text1: "SKI CLOTHES SALE", text2: "Unbelievable Price"},
    {image: csbanner2, blackBg: true, text1: "TERENDING WOMEN'S", text2: "Sunglasses"},
    {image: csbanner3, blackBg: false, text1: "NEWEST BAG", text2: "Collection"}
]


function ComingSoonPart() {
  return (
    <Box className={styles.allBannersContainer}>
        <ComingSoonBanner banner={csBanners[0]}/>
        <ComingSoonBanner banner={csBanners[1]}/>
        <ComingSoonBanner banner={csBanners[2]}/>
    </Box>
  )
}

export default ComingSoonPart