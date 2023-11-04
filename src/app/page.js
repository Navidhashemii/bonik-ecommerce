import { Container } from "@mui/material";
import TopBanners from "../components/Home-Page/Top-Banners/TopBanners";
import BenefitPart from "../components/Home-Page/Benefit-Part/BenefitPart";
import { getLocalData } from '../../json/lib/localdata';
import CategoryOptionList from "../components/Home-Page/Category-Options/CategoryOptions";
import AirportInfoBanner from "../components/Home-Page/Airport-Banner/AirportBanner";
import DealsOfTheDay from "../components/Home-Page/Deals-Of-The-Day/DealsOfTheDay";
import ComingSoonPart from "../components/Home-Page/Coming-Soon-part/ComingSoonPart";
import Products from "../components/Home-Page/Products/Products";
import MiddleBannerPart from "../components/Home-Page/Middle-Banners-Part/MiddleBannerPart";
import GiftBanner from "../components/Home-Page/Gift-Banner/GiftBanner";
import BrandsSwiper from "../components/Home-Page/Featured-Brands/BrandsSwiper";



export default async function Home() {

  const data = await getLocalData();
  if (!data) {
    throw new Error("Failed trying to get data");
  }

  const categories = data.categories

  
  return (
    <Container sx={{marginTop:"15px"}} >

      <TopBanners/>
      <BenefitPart/>
      <CategoryOptionList data={data}/>
      <AirportInfoBanner/>
      <DealsOfTheDay data={data}/>
      <ComingSoonPart/>
      <Products data={data} category={categories[0]}/>
      <MiddleBannerPart/>
      <Products data={data} category={categories[1]}/>
      <Products data={data} category={categories[2]}/>
      <Products data={data} category={categories[3]}/>
      <GiftBanner/>
      <Products data={data} category={categories[4]}/>
      <Products data={data} category={categories[5]}/>
      <BrandsSwiper/>


    </Container>
    
     

   
  )
}
