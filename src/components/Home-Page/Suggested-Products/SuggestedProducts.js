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

console.log(finalData)

   

  return (
    <Box className={styles.boxContainer}>
        <Typography variant="h5" className={styles.title}>
            Suggested Products
        </Typography>
        <Box className={styles.buttonContainer1}>
            <Button onClick={() => handleClick('arrival')} className={`${styles.mainBtn} ${active === 'arrival' ? styles.active : ''}`}>
                New Arrivals
            </Button>
            <Box className={styles.buttonContainer2}>
                <Button onClick={() => handleClick('feedback')} className={`${styles.btn} ${active === 'feedback' ? styles.active : ''}`}>
                    Most Feedback
                </Button>
                <Button onClick={() => handleClick('popular')} className={`${styles.btn} ${active === 'popular' ? styles.active : ''}`}>
                    Most Popular
                </Button>
            </Box>

        </Box>
        <CardSwiper data={finalData}/>

    </Box>
  )
}

export default SuggestedProducts