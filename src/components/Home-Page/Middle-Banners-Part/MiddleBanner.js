import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import styles from './MiddleBanner.module.css'


function MiddleBanner({banner}) {

    const {image, blackBg, text1, text2} = banner
    const whiteText = blackBg ? styles.whiteText : null;

  return (
    <Box className={styles.bannerContainer}>
        <Image
            src={image}
            fill
            alt='banner'
            sizes='(max-width: 768px) 100vh, 700px'
            className={styles.image}
        />

        <Box className={styles.textContainer}>
            <Typography
                variant='subtitle1'
                className={`${styles.title} ${whiteText}`}
            >
                New Arrivals
            </Typography>

            <Typography
                variant='h4'
                className={`${styles.text1} ${whiteText}`}
            >
                {text1}
            </Typography>

            <Box className={`${styles.line} ${whiteText}`}/>

            <Box className={styles.priceContainer}>
                <Typography className={`${styles.text2} ${whiteText}`}>
                    Starting At
                </Typography>
                <Typography
                    variant='h5'
                    className={styles.price}
                >
                    {text2}
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default MiddleBanner