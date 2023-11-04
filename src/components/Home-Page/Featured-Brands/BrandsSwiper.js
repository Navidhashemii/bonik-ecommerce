'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './BrandCard.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import BrandCard from './BrandCard';
import { Box, Typography } from '@mui/material';
import brand1 from '../../../assets/images/brand1.png'
import brand2 from '../../../assets/images/brand2.png'
import brand3 from '../../../assets/images/brand3.png'
import brand4 from '../../../assets/images/brand4.png'
import brand5 from '../../../assets/images/brand5.png'
import brand7 from '../../../assets/images/brand7.png'
import brand8 from '../../../assets/images/brand8.png'
import brand9 from '../../../assets/images/brand9.png'





function BrandsSwiper() {

    const brands = [
        {id: 1, image: brand1},
        {id: 2, image: brand2},
        {id: 3, image: brand3},
        {id: 4, image: brand4},
        {id: 5, image: brand5},
        {id: 6, image: brand7},
        {id: 7, image: brand8},
        {id: 8, image: brand9},
    ]

  return (
    <Box className={styles.boxContainer}>
        <Typography>
            Featured Brands
        </Typography>
        <Box className={styles.swiperContainer}>
            <Swiper
                loop={true}
                slidesPerView={2}
                draggable={true}
            >
                
                {brands.map(({id, image}) => (
                    <SwiperSlide key={id}>
                        <BrandCard image={image}/>
                    </SwiperSlide>
                ))}

            </Swiper>
        </Box>
    </Box>
  )
}

export default BrandsSwiper