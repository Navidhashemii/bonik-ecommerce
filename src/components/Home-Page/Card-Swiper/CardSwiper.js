'use client'

import { Box, Button, Divider, Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CardSwiper.css'
import Image from "next/image";
import styles from './CardSwiper.module.css'



function CardSwiper({data}) {

  return (
    <>
        <Swiper
            modules={[ Navigation, ]}
            className={styles.swiperStyles}
            spaceBetween={20}
            navigation={true}
        >
            {data.map(({id, image1, name, price, star, rate, discount}) => (
                <SwiperSlide key={id}>
                    <Box className={styles.cardContainer}>
                        <Image
                            src={image1}
                            alt={name}         
                            width={200}
                            height={270}
                        />
                        <Divider variant="middle"/>
                        <Typography variant="subtitle1" className={styles.cardName}>
                            {name}
                        </Typography>

                        {discount 

                        ? 

                        <Box>
                            <Box bgcolor="secondary.main" className={styles.discountBox}>
                                {discount}%
                            </Box>
                                
                            <Typography variant="h6" color="secondary" className={styles.afterDiscount}>
                                ${Math.floor(price - ((price * discount) / 100)).toFixed(2)}
                            </Typography>

                            <Typography variant="subtitle1" className={styles.beforeDiscount}>
                                ${price.toFixed(2)}
                            </Typography>
                        </Box>

                        : 

                        <Typography variant="h6" className={styles.price}>
                            {price}
                        </Typography>

                        }

                        <Box className={styles.ratingContainer}>
                            <Rating size="small" value={star}/>
                            <Typography variant="subtitle2" className={styles.rateCount}>
                                ({rate})
                            </Typography>
                        </Box>

                        <Button className={styles.button}>
                            Add To Cart
                        </Button>
                    </Box>
                </SwiperSlide>
            ))}
            
        </Swiper>

    </>

  )
}

export default CardSwiper