import { Box, Container } from "@mui/material";
import CartProductCard from "../../components/Cart-Page/Cart-Product-Card/CartProductCard"
import CartStepper from "@/src/components/Cart-Page/Cart-Stepper/CartStepper";
import CartProductDetails from "@/src/components/Cart-Page/Cart-Product-Details/CartProductDetails";
import styles from '../../components/Cart-Page/Cart-Product-Details/CartProductDetails.module.css'


export default function Cart() {

  return (
    <Container
      sx={{
        marginTop:"15px",
        '@media screen and (min-width:900px)': {maxWidth: '1140px'},
        '@media screen and (min-width:1200px)': {maxWidth: '1260px'}
      }}
    >
        <CartStepper />
        <Box className={styles.mainPageContainer}>
          <CartProductCard/>
          <CartProductDetails/>
        </Box>
    </Container>    
  )
}

 