'use client'
import LargeTopBanners from '../Large-Top-Banners/LargeTopBanners';
import largeBaner1 from '../../../assets/images/main-1.jpg'
import largeBaner2 from '../../../assets/images/main-2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './MainSwiper.css';





function MainSwiper() {
  return (
    <Swiper 
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      style={{
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-horizontal-gap": "8px",
      }}
    >

      <SwiperSlide slot="wrapper-start"><LargeTopBanners generic={"Men"} img={largeBaner1} available={true}/></SwiperSlide>
      <SwiperSlide slot="wrapper-end"><LargeTopBanners generic={"Women"} img={largeBaner2} available={false}/></SwiperSlide>
      
    </Swiper>
  )
}

export default MainSwiper