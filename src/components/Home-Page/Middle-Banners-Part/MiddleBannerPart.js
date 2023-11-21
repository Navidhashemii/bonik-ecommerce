import React from 'react'
import MiddleBanner from './MiddleBanner'
import accImg from '../../../assets/images/banner-acc.jpg'
import coatImg from '../../../assets/images/banner-coat.jpg'
import { Box } from '@mui/material'
import styles from './MiddleBanner.module.css'



const middleBanners = [
    {image: coatImg, blackBg: false, text1: "FINE LEATHER COATS", text2: "$200.00"},
    {image: accImg, blackBg: true, text1: "BEST COTTON BELTS", text2: "$30.00"},
]


function MiddleBannerPart() {
  return (
    <Box className={styles.boxContainer}>
        <MiddleBanner banner={middleBanners[0]}/>
        <MiddleBanner banner={middleBanners[1]}/>
    </Box>
  )
}

export default MiddleBannerPart