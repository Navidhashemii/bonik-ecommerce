'use client'
import CartStepper from '@/src/components/Cart-Page/Cart-Stepper/CartStepper'
import CartTotalPayment from '@/src/components/Cart-Page/Cart-Total-Payment/CartTotalPayment'
import PaymentMethods from '@/src/components/Cart-Page/Payment-Methods/PaymentMethods'
import { Container } from '@mui/system'
import React from 'react'

function Payment() {
  return (
    <Container sx={{marginTop:"15px"}}>
        <CartStepper steps={'payment'} />
        <CartTotalPayment/>
        <PaymentMethods/>         
    </Container>
    
  )
}

export default Payment