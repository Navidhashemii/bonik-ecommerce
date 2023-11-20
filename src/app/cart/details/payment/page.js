'use client'
import CartStepper from '@/src/components/Cart-Page/Cart-Stepper/CartStepper'
import CartTotalPayment from '@/src/components/Cart-Page/Cart-Total-Payment/CartTotalPayment'
import PaymentMethods from '@/src/components/Cart-Page/Payment-Methods/PaymentMethods'
import { Container } from '@mui/system'
import React from 'react'
import styles from '../../../../components/Cart-Page/Payment-Methods/PaymentMethod.module.css'
import { Box } from '@mui/material'

function Payment() {
  return (
    <Container
      sx={{
        marginTop:"15px",
        '@media screen and (min-width:900px)': {maxWidth: '1140px'},
        '@media screen and (min-width:1200px)': {maxWidth: '1260px'}
      }}
    >
        <CartStepper steps={'payment'} />
        <Box className={styles.mainPageContainer}>
          <CartTotalPayment/>
          <Box className={styles.mainAddressContainer}>
            <PaymentMethods/> 
          </Box>
        </Box>        
    </Container>
    
  )
}

export default Payment