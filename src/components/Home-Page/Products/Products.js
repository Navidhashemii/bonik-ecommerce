'use client'

import { Box, Divider, Typography, Button } from '@mui/material'
import styles from './Products.module.css'
import CardSwiper from '../Card-Swiper/CardSwiper'
import { useState } from 'react'

function Products({data, category}) {

  
  const [selectedBrand, setSelectedBrand] = useState('')
  // const [active, setActive] = useState('')

  const brands = data.brands
  const products = data.products


  const productCategory = products.filter(({categoryId}) => categoryId === category.id)

  const finalProduct = selectedBrand.length > 0 ?  productCategory.filter(({brand}) => brand === selectedBrand) : productCategory;
  
  const handleBrand = (name) => {
    setSelectedBrand(name)
  }

  const handleSeeAll = () => {
    setSelectedBrand('')
  }
  

  return (
    <Box>
        <Box
          bgcolor='background.white'
          className={styles.boxContainer}
        >
          <Typography className={styles.product}>
            {category.name}
          </Typography>
          <Divider variant='fullWidth'/>
          <Typography
            variant='h3'
            className={styles.title}
          >
            Brands
          </Typography>
          
          <Box className={styles.buttonsContainer}>
            {brands.map(({id, name}) => (
              <button 
                onClick={() => handleBrand(name)}
                key={id}
                className={`${styles.brandButton} ${selectedBrand === name ? styles.active : ''}`}>
                {name}
              </button>
            ))}
            <button onClick={handleSeeAll} className={styles.button}>
              See All
            </button>
          </Box>
        </Box>
        <CardSwiper data={finalProduct}/>

    </Box>
  )
}

export default Products