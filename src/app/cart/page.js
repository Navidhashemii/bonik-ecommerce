import { Container } from "@mui/material";
import CartProductCard from "../../components/Cart-Page/Cart-Product-Card/CartProductCard"
import CartStepper from "@/src/components/Cart-Page/Cart-Stepper/CartStepper";
import CartProductDetails from "@/src/components/Cart-Page/Cart-Product-Details/CartProductDetails";



export default function Cart() {

  return (
    <Container sx={{marginTop:"15px"}}>
        <CartStepper />
        <CartProductCard/>
        <CartProductDetails/>
    </Container>    
  )
}

 