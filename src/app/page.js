import { Box, Container } from "@mui/material";
import TopBanners from "../components/TopBanners";
import BenefitPart from "../components/BenefitPart";



export default function Home() {
  return (
    <Container sx={{marginTop:"15px"}} >

      <TopBanners/>
      <BenefitPart/>


    </Container>
    
     

   
  )
}
