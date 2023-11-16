'use client'

import { Box, Button, Typography } from '@mui/material'
import styles from './Categories.module.css'
import AppsIcon from '@mui/icons-material/Apps';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Link from 'next/link';

function CategoriesSection({data}) {

  const categories = data.categories 
  const products = data.products 
  
  const [active, setActive] = useState(0)
  
  useEffect(() => {
    const hashFrag = window.location.hash
    const finalHash = Number(hashFrag.substring(1))
    setActive(finalHash || 0)
  }, []);
  
  
  const categoryProducts = products.filter(({categoryId}) => categoryId === active)
 

  const handleActive = (id) => {
    setActive(id)
  }


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
          <Link key={id} href={`/products/${id}`}>
            <Button className={styles.productItem}>
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
          </Link>

        )) 
        
        :
        categoryProducts.map(({id, name, image1}) => (
          <Link key={id} href={`/products/${id}`}>
            <Button className={styles.productItem}>
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
          </Link>
        ))
        
      }

      </Box>
    </Box>
  )
}

export default CategoriesSection