import Image from "next/image";
import { Box, Button, Typography } from "@mui/material"
import styles from './SmallTopBanner.module.css'

function SmallTopBanner({image, newArrival}) {
  return (

    <>
        <Box className={styles.boxContainer}>
            <Image
                src={image}
                fill
                alt='smallBanner'
                sizes='(max-width: 768px) 100vh, 700px'
                priority
            />

            <Box className={styles.textContainer}>

                {newArrival

                ?

                <>
                    <Typography
                        variant='subtitle1'
                        className={styles.text1}
                    >
                        NEW ARRIVALS
                    </Typography>
                    <Typography
                        variant='h6'
                        className={styles.text2}
                    >
                        SUMMER 
                        <br/>
                        SALE 20% OFF
                    </Typography>  
                </>
                    
                :

                <>
                    <Typography
                        variant='subtitle1'
                        className={styles.text1}
                    >
                        HIGH QUIALITY
                    </Typography>
                    <Typography 
                        variant='h6'
                        className={styles.text2}
                    >
                        AND BEST  
                        <br/>
                        PRICE HATS
                    </Typography>
                
                </>
                    
                }

                <Button
                    variant="text"
                    size="small"
                    className={styles.button}
                >
                    Shop Now
                </Button>

            </Box>

        </Box>
    
    </>
    
  )
}

export default SmallTopBanner