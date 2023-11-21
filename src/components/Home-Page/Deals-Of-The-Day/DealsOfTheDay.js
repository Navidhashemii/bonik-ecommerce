import { Box, Typography } from "@mui/material"
import CardSwiper from "../Card-Swiper/CardSwiper"
import styles from './DealsOfTheDay.module.css'


function DealsOfTheDay({data}) {
  
  const product = data.products
  const withDiscount = product.filter(({discount}) => discount)
  
  return (
    <Box className={styles.container}>
        <Typography
          variant="h5"
          className={styles.text}
        >
            Deals Of The Day
        </Typography>

        <CardSwiper
          data={withDiscount} 
          notCategoryBased={true}
        />
    </Box>
  )
}

export default DealsOfTheDay