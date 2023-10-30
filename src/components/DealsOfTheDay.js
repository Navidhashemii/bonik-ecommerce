import { Box, Typography } from "@mui/material"
import CardSwiper from "./CardSwiper"


function DealsOfTheDay({data}) {

  const products = data.products
  const withDiscount = products.filter(({discount}) => discount)

  return (
    <Box sx={{margin:"68px 0 30px 0"}}>
        <Typography sx={{fontSize:"22px"}}>
            Deals Of The Day
        </Typography>
        <CardSwiper data={withDiscount}/>

    </Box>
  )
}

export default DealsOfTheDay