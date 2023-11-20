'use client'

import { Box, Button, Typography } from "@mui/material"
import styles from './SuggestedProducts.module.css'
import { useState } from "react"
import CardSwiper from "../Card-Swiper/CardSwiper"


function SuggestedProducts({data}) {

    const products = data.products
    const [active, setActive] = useState('arrival')
    const handleClick = (name) => {
        setActive(name)
    }

    let finalData = products.filter(({newArrival}) => newArrival)
    
    if (active === 'feedback') {
        finalData = products
        .filter(({rate}) => rate) 
        .sort((a, b) => b.rate - a.rate) 
        .slice(0, 15);
        
    } else if (active === 'popular'){
        finalData = products
        .filter(({star}) => star > 3) 
        .sort((a, b) => b.star - a.star) 

    } else {
    finalData
}
   
  return (
    <Box className={styles.boxContainer}>
        <Box className={styles.titleBtnsContainer}>
            <Box>
                <Typography
                    variant="h5"
                    className={styles.title}
                >
                    Suggested Products
                </Typography>
                <Typography variant="subtitle1" className={styles.subTitle}>
                    All our new arrivals in a exclusive brand selection
                </Typography>
            </Box>

            <Box className={styles.mainButtonsContainer}>
                <Button
                    onClick={() => handleClick('arrival')}
                    className={`${styles.mainBtn} ${active === 'arrival' ? styles.active : ''}`}
                >
                    New Arrivals
                </Button>

                <Box className={styles.subButtonsContainer}>
                    <Button
                        onClick={() => handleClick('feedback')}
                        className={`${styles.btn} ${active === 'feedback' ? styles.active : ''}`}
                    >
                        Most Feedback
                    </Button>

                    <Button
                        onClick={() => handleClick('popular')}
                        className={`${styles.btn} ${active === 'popular' ? styles.active : ''}`}
                    >
                        Most Popular
                    </Button>
                </Box>
            </Box>
        </Box>

        <CardSwiper data={finalData} notCategoryBased={true}/>

    </Box>
  )
}

export default SuggestedProducts