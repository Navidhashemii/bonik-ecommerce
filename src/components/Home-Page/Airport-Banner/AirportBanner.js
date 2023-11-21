import { Box, Button, Typography } from '@mui/material'
import styles from './AirportBanner.module.css'

function AirportBanner() {
  return (
    <Box className={styles.boxContainer}>
      <Box className={styles.titleBox}>
        <Typography variant='h3' className={styles.title}>
          BLACK FRIDAY SALE!
        </Typography>
        <Box className={styles.skewBox} />
      </Box>
      <Box className={styles.marquee}>
        <Box className={styles.marqueeContainer}>
          <Typography variant='h4' className={styles.marqueeText}>
            PAY ONLY HALF PRICE FOR YOUR LOVING CLOTHES
          </Typography>
        </Box>
      </Box>
      <Button variant='contained' className={styles.button}>
        Shop Now
      </Button>
    </Box>
  )
}

export default AirportBanner