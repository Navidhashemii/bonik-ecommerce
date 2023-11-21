import { Box, Container } from '@mui/material'
import styles from '../../../components/Details-Page/Address.module.css' 
import CartStepper from '@/src/components/Global/Cart-Stepper/CartStepper'
import CartTotalPayment from '@/src/components/Global/Cart-Total-Payment/CartTotalPayment'
import ShippingAddress from '@/src/components/Details-page/ShippingAddress'
import BillingAddress from '@/src/components/Details-page/BillingAddress'



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
                <ShippingAddress/>
                <BillingAddress/>
            </Box>
        </Box>

    </Container>
  )
}
