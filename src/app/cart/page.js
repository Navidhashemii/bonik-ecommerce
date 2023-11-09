'use client'

import { Container, StyledEngineProvider } from "@mui/material";
import ClientProviderRedux from "../ClientProviderRedux";
import CartProductCard from "../../components/Cart-Page/Cart-Product-Card/CartProductCard"
import ClientProviderTheme from "../ClientProviderTheme";
import CartStepper from "@/src/components/Cart-Page/Cart-Stepper/CartStepper";
import CartProductDetails from "@/src/components/Cart-Page/Cart-Product-Details/CartProductDetails";



export default function Cart() {

  return (
    
    <ClientProviderRedux>
        <StyledEngineProvider injectFirst>
            <ClientProviderTheme>
                <Container sx={{marginTop:"15px"}}>
                  <CartStepper />
                  <CartProductCard/>
                  <CartProductDetails/>
                </Container>
            </ClientProviderTheme>
        </StyledEngineProvider>
    </ClientProviderRedux>
    
    
  )
}

 