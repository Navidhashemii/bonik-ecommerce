import { Box, Button } from '@mui/material'
import styles from './Address.module.css'
import BillingAddress from './BillingAddress'
import ShippingAddreess from './ShippingAddreess'

function Address() {
  return (
    <>
        <ShippingAddreess/>
        <BillingAddress/>
        <Box className={styles.paymentContainer}>
            <Button className={styles.backBtn}>
                Back to Cart
            </Button>
            <Button className={styles.nextBtn}>
                Proceed to Payment
            </Button>
        </Box>
    </>
  )
}

export default Address