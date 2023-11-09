import { Box, Typography } from '@mui/material'
import styles from './Address.module.css'
import Details from './Details'

function ShippingAddreess() {

  return (
    <Box className={styles.boxContainer}>
        <Typography variant='subtitle2' className={styles.title}>
            Shipping Address
        </Typography>
        <Details/>
    </Box>
  )
}

export default ShippingAddreess