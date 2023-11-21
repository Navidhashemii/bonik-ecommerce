import Image from 'next/image'
import styles from './Footer.module.css'
import { Box, Button, Typography } from '@mui/material'

function DownloadButton({data}) {
    const {image, text1, text2} = data
  return (
    <Button className={styles.downloadButton}>
        <Image
            src={image}
            alt={text2}
            width={30}
            height={30}
            priority
        />
        <Box className={styles.buttonTextContainer}>
            <Typography className={styles.firstButtonText}>
                {text1}
            </Typography>
            
            <Typography
                variant='subtitle1'
                className={styles.secondButtonText}
            >
                {text2}
            </Typography>
        </Box>
    </Button>
  )
}

export default DownloadButton