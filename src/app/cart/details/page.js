import { Box, Container } from '@mui/material'
import CartStepper from '@/src/components/Cart-Page/Cart-Stepper/CartStepper'
import CartTotalPayment from '@/src/components/Cart-Page/Cart-Total-Payment/CartTotalPayment'
import ShippingAddreess from '@/src/components/Cart-Page/Address/ShippingAddreess'
import BillingAddress from '@/src/components/Cart-Page/Address/BillingAddress'
import styles from '../../../components/Cart-Page/Address/Address.module.css' 


export default function Details() {
  return (
    <Container
      sx={{
        marginTop:"15px",
        '@media screen and (min-width:900px)': {maxWidth: '1140px'},
        '@media screen and (min-width:1200px)': {maxWidth: '1260px'}
      }}
    >
        <CartStepper steps={'details'} />
        <Box className={styles.mainPageContainer}>
          <CartTotalPayment/>
          <Box className={styles.mainAddressContainer}>
            <ShippingAddreess/>
            <BillingAddress/>
          </Box>
        </Box>
    </Container>
  )
}
