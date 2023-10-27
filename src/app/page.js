import { Box, Container } from "@mui/material";
import TopBanners from "../components/TopBanners";
import BenefitPart from "../components/BenefitPart";
import { getLocalData } from '../../json/lib/localdata';


export default async function Home() {

  const data = await getLocalData();
  if (!data) {
    throw new Error("Failed trying to get data");
  }

  
  return (
    <Container sx={{marginTop:"15px"}} >

      <TopBanners/>
      <BenefitPart/>

    </Container>
    
     

   
  )
}
