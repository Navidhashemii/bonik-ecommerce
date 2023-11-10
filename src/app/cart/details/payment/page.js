'use client'

import ClientProviderRedux from '@/src/app/ClientProviderRedux'
import ClientProviderTheme from '@/src/app/ClientProviderTheme'
import CartStepper from '@/src/components/Cart-Page/Cart-Stepper/CartStepper'
import CartTotalPayment from '@/src/components/Cart-Page/Cart-Total-Payment/CartTotalPayment'
import PaymentMethods from '@/src/components/Cart-Page/Payment-Methods/PaymentMethods'
import { StyledEngineProvider } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

function Payment() {
  return (
    <ClientProviderRedux>
        <StyledEngineProvider injectFirst>
            <ClientProviderTheme>
                <Container sx={{marginTop:"15px"}}>
                    <CartStepper steps={'payment'} />
                    <CartTotalPayment/>
                    <PaymentMethods/>
                    
                </Container>
            </ClientProviderTheme>
        </StyledEngineProvider>
    </ClientProviderRedux>
  )
}

export default Payment