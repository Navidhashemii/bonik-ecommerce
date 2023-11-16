import { Box, Button } from '@mui/material'
import styles from './Address.module.css'
import BillingAddress from './BillingAddress'
import ShippingAddreess from './ShippingAddreess'
import Link from 'next/link'

function Address() {
  return (
    <>
        <ShippingAddreess/>
        <BillingAddress/>
        <Box className={styles.paymentContainer}>
            <Button className={styles.backBtn}>
                Back to Cart
            </Button>
            <Link href='/cart/details/payment'>
              <Button className={styles.nextBtn}>
                  Proceed to Payment
              </Button>
            </Link>
        </Box>
    </>
  )
}

export default Address