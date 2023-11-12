'use client'

import { Box, Button, Typography } from '@mui/material'
import styles from './Categories.module.css'
import AppsIcon from '@mui/icons-material/Apps';
import Image from 'next/image'
import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; 

function CategoriesSection({data}) {

  const [active, setActive] = useState(0)

  const categories = data.categories 
  const products = data.products 

  const handleActive = (id) => {
    setActive(id)
  }

  const categoryProducts = products.filter(({categoryId}) => categoryId === active)

  return (
    <Box className={styles.boxContainer}>
      <Box className={styles.categoriesContainer}>
        <Button onClick={() => handleActive(0)} variant="outlined" startIcon={<AppsIcon /> } className={`${styles.categoryBtn} ${active === 0 ? styles.active : ''} `}>
          See All
        </Button>
        {categories.map(({id, name}) => (  
            <Button key={id} onClick={() => handleActive(id)} className={`${styles.categoryBtn} ${active === id ? styles.active : ''}`}>
                {name}    
            </Button>
        ))}
        
      </Box>
      <Box className={styles.productItemsContainer}>

        {active === 0 ?
        products.map(({id, name, image1}) => (

          <Button key={id} className={styles.productItem}>
            <Image
              src={image1}
              alt={name}
              width={40}
              height={50}
            />
            <Box className={styles.productItemText}>
              <Typography className={styles.nameItem}>
                {name}
              </Typography>
            </Box>
          </Button>

        )) 
        
        :
        categoryProducts.map(({id, name, image1}) => (
 
          <Button key={id} className={styles.productItem}>
            <Image
              src={image1}
              alt={name}
              width={40}
              height={50}
              />
            <Box className={styles.productItemText}>
              <Typography className={styles.nameItem}>
                {name}
              </Typography>
            </Box>
          </Button>

        ))
        
      }

      </Box>
    </Box>
  )
}

export default CategoriesSection