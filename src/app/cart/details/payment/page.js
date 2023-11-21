'use client'
import { Container } from '@mui/system'
import React from 'react'
import styles from '../../../../components/Payment-Page/PaymentMethod.module.css'
import { Box } from '@mui/material'
import CartStepper from '@/src/components/Global/Cart-Stepper/CartStepper'
import CartTotalPayment from '@/src/components/Global/Cart-Total-Payment/CartTotalPayment'
import PaymentMethods from '@/src/components/Payment-Page/PaymentMethods'

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