import { Box, Container } from "@mui/material";
import TopBanners from "../components/TopBanners";
import BenefitPart from "../components/BenefitPart";
import { getLocalData } from '../../json/lib/localdata';
import CategoryOptionList from "../components/CategoryOptions";
import AirportInfoBanner from "../components/AirportBanner";


export default async function Home() {

  const data = await getLocalData();
  if (!data) {
    throw new Error("Failed trying to get data");
  }

  
  return (
    <Container sx={{marginTop:"15px"}} >

      <TopBanners/>
      <BenefitPart/>
      <CategoryOptionList data={data}/>
      <AirportInfoBanner/>
      

    </Container>
    
     

   
  )
}
