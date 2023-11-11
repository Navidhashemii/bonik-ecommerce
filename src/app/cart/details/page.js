import { Container } from '@mui/material'
import CartStepper from '@/src/components/Cart-Page/Cart-Stepper/CartStepper'
import CartTotalPayment from '@/src/components/Cart-Page/Cart-Total-Payment/CartTotalPayment'
import Address from '@/src/components/Cart-Page/Address/Address'


export default function Details() {
  return (
    <Container sx={{marginTop:"15px"}}>
        <CartStepper steps={'details'} />
        <CartTotalPayment/>
        <Address />
    </Container>
  )
}
