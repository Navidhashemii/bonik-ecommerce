import { Box, Typography } from '@mui/material'
import styles from './Details.module.css'
import Details from './Details'

function ShippingAddress() {

  return (
    <Box className={styles.boxContainer}>
        <Typography 
          variant='subtitle2' 
          className={styles.title}
        >
            Shipping Address
        </Typography>
        <Details/>
    </Box>
  )
}

export default ShippingAddress