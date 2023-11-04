import { Box } from "@mui/material"
import Image from "next/image"
import styles from './BrandCard.module.css'


function BrandCard({image}) {
  return (
    <Box className={styles.imageContainer}>
        <Image
            src={image}
            alt='brand'         
            width={110}
            height={60}
            
        />
    </Box>
  )
}

export default BrandCard