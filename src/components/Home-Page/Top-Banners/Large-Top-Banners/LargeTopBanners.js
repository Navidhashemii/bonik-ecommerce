'use client'

import { Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import styles from './LargeTopBanners.module.css'
import Link from 'next/link'

function LargeTopBanners({generic, img, available}) {
  
  return (
    <Box className={styles.boxContainer}>

        <Image
          src={img}
          fill
          alt='largeBanner'
          sizes='(max-width: 768px) 100vh, 700px'
          priority
          className={styles.image}
        />

        <Box className={styles.textContainer}>

          <Typography
            variant='h2'
            className={styles.title1}
          >
            Lifestyle Collection
          </Typography>

          <Typography
            variant='h1'
            className={styles.title2}
          >
            {generic}
          </Typography>

          <Box className={styles.subtitleContainer}>

            <Typography
              variant='h2'
              className={styles.subtitle1}
            >
              SALE UP TO
            </Typography>

            <Typography
              variant='h7'
              className={styles.subtitle2}
            >
              50% OFF
            </Typography>

          </Box>

          <Typography
            variant='h6'
            className={styles.subtitle3}
          >
            Get Free Shipping On Orders Over $99.00
          </Typography>

            {available

            ? 
              <Link href='./categories'>
                <Button 
                  variant='contained'
                  size='large'
                  className={styles.button}
                >
                  Shop Now
                </Button>
              </Link>

            :

              <Typography
                variant='h2'
                className={styles.comingSoon}
              >
                Coming Soon
              </Typography>

            }

        </Box>
    </Box>
  )
}

export default LargeTopBanners