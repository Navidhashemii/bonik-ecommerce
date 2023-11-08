'use client'

import { Container, StyledEngineProvider } from "@mui/material";
import ClientProviderRedux from "../ClientProviderRedux";
import CartProductCard from "../../components/Cart-Page/Cart-Product-Card/CartProductCard"
import ClientProviderTheme from "../ClientProviderTheme";



export default function page() {

  return (
    
    <ClientProviderRedux>
        <StyledEngineProvider injectFirst>
              <ClientProviderTheme>
                 <Container sx={{marginTop:"15px"}} >
                    <CartProductCard/>
                </Container>
            </ClientProviderTheme>
        </StyledEngineProvider>
    </ClientProviderRedux>
    
    
  )
}

 