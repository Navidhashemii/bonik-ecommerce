import { Box, Container } from "@mui/material";
import TopBanners from "../components/Home-Page/Top-Banners/TopBanners";
import BenefitPart from "../components/Home-Page/Benefit-Part/BenefitPart";
import { getLocalData } from '../../json/lib/localdata';
import CategoryOptionList from "../components/Home-Page/Category-Options/CategoryOptions";
import AirportInfoBanner from "../components/Home-Page/Airport-Banner/AirportBanner";
import DealsOfTheDay from "../components/Home-Page/Deals-Of-The-Day/DealsOfTheDay";



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
      <DealsOfTheDay data={data}/>
      

    </Container>
    
     

   
  )
}
