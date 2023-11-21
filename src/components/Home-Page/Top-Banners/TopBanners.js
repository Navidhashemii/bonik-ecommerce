'use client'

import SmallTopBanner from "./Small-Top-Banners/SmallTopBanner";
import { Box } from "@mui/material"
import smallBanner1 from '../../../assets/images/top-1.jpg'
import smallBanner2 from '../../../assets/images/top-2.jpg'
import styles from './TopBanners.module.css'
import LargeTopBanners from './Large-Top-Banners/LargeTopBanners';
import largeBaner1 from '../../../assets/images/main-1.jpg'
import largeBaner2 from '../../../assets/images/main-2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './BannerSwiper.css';

function TopBanners() {
  return (
    <Box className={styles.allBannersContainer}>
        <Box className={styles.largeBannersContainer}>
          <Swiper 
            modules={[Pagination]}
            pagination={{
            clickable: true,
            }}
            style={{
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-horizontal-gap": "8px",
            }}
          >
            <SwiperSlide slot="wrapper-start">
                <LargeTopBanners
                  generic={"Men"}
                  img={largeBaner1}
                  available={true}
                />
            </SwiperSlide>

            <SwiperSlide slot="wrapper-end">
                <LargeTopBanners
                  generic={"Women"}
                  img={largeBaner2}
                  available={false}
                />
            </SwiperSlide>
          </Swiper>
        </Box>

        <Box className={styles.smallBannersContainer}>
            <SmallTopBanner
              image={smallBanner1}
              newArrival={true}
              href={'#Shoes'}
            />
            
            <SmallTopBanner 
              image={smallBanner2} 
              newArrival={false} 
              href={'#Hats'}
            />
        </Box>

            
    </Box>
  )
}

export default TopBanners