import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"
import giftBanner from '../../../assets/images/gift.jpg'
import styles from './GiftBanner.module.css'


function GiftBanner() {
  return (
    <Box className={styles.boxContainer}>
        <Image
            src={giftBanner}
            fill
            alt='giftBanner'
            sizes='(max-width: 768px) 100vh, 700px'
            className={styles.image}
        />
        <Box className={styles.dataContainer}>
            <Box className={styles.textContainer}>
                <Typography variant="h2" className={styles.text1}>
                    GIFT <span className={styles.red}>50% OFF</span> PERFECT STYLES
                </Typography>
                <Typography className={styles.text2}>
                    Only until the end of this week
                </Typography>
            </Box>
            <Button className={styles.button}>
                Discover Now
            </Button>
        </Box>

    </Box>
  )
}

export default GiftBanner