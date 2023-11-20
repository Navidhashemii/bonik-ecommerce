'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './BrandCard.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import BrandCard from './BrandCard';
import { Box, Typography } from '@mui/material';
import { Autoplay } from 'swiper/modules';
import brand1 from '../../../assets/images/brand1.jpg'
import brand2 from '../../../assets/images/brand2.jpg'
import brand3 from '../../../assets/images/brand3.jpg'
import brand4 from '../../../assets/images/brand4.jpg'
import brand5 from '../../../assets/images/brand5.jpg'
import brand6 from '../../../assets/images/brand6.jpg'
import brand7 from '../../../assets/images/brand7.jpg'
import brand8 from '../../../assets/images/brand8.jpg'





function BrandsSwiper() {

    const brands = [
        {id: 1, image: brand1},
        {id: 2, image: brand2},
        {id: 3, image: brand3},
        {id: 4, image: brand4},
        {id: 5, image: brand5},
        {id: 6, image: brand6},
        {id: 7, image: brand7},
        {id: 8, image: brand8},
    ]

  return (
    <Box className={styles.boxContainer}>
        <Typography variant='h5' className={styles.title}>
            Featured Brands
        </Typography>
        <Box className={styles.swiperContainer}>
            <Swiper
                modules={[Autoplay]}
                loop={true}
                slidesPerView={2}
                draggable={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                breakpoints={{
                    600:{
                        slidesPerView: 3,
                    },
                    900:{
                        slidesPerView: 4,
                    },
                    1200:{
                        slidesPerView: 5,
                    }
                }}
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