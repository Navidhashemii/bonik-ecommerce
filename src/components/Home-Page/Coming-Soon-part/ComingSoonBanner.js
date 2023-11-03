import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import styles from './ComingSoonPart.module.css'

function ComingSoonBanner({banner}) {

    const {image, blackBg, text1, text2} = banner
    const whiteText = blackBg ? styles.whiteText : null; 

  return (
    <Box className={styles.bannerContainer}>

        <Image
            src={image}
            alt='coming soon'
            fill
            sizes='(max-width: 768px) 100vh, 700px'
        />
        <Box className={styles.textContainer}>
            <Typography variant='h6' className={`${styles.title1} ${whiteText}`}>
                Coming Soon
            </Typography>
            <Typography variant='h6' className={`${styles.title2} ${whiteText}`}>
                {text1}
            </Typography>
            <Typography variant='subtitle1' className={`${styles.title3} ${whiteText}`}>
                {text2}
            </Typography>
        </Box>

    
    </Box>
  )
}

export default ComingSoonBanner