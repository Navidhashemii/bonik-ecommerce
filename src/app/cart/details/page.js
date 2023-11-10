'use client'
import ClientProviderRedux from '../../ClientProviderRedux'
import { Container, StyledEngineProvider } from '@mui/material'
import ClientProviderTheme from '../../ClientProviderTheme'
import CartStepper from '@/src/components/Cart-Page/Cart-Stepper/CartStepper'
import CartTotalPayment from '@/src/components/Cart-Page/Cart-Total-Payment/CartTotalPayment'
import Address from '@/src/components/Cart-Page/Address/Address'


export default function Details() {
  return (
        
        <ClientProviderRedux>
            <StyledEngineProvider injectFirst>
                <ClientProviderTheme>
                    <Container sx={{marginTop:"15px"}}>
                      <CartStepper steps={'details'} />
                      <CartTotalPayment/>
                      <Address />
                    </Container>
                </ClientProviderTheme>
            </StyledEngineProvider>
        </ClientProviderRedux>
     
  )
}
