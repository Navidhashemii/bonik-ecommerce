
import Image from 'next/image'
import styles from './Footer.module.css'
import { Box, Typography } from '@mui/material'
import facebook from '../../../assets/images/facebook.png'
import gmail from '../../../assets/images/gmail.png'
import linkedin from '../../../assets/images/linkedin.png'
import twitter from '../../../assets/images/twitter.png'

function FooterContacts() {
    const images = [
        {id: 1, img: facebook},
        {id: 2, img: gmail},
        {id: 3, img: linkedin},
        {id: 4, img: twitter},
    ]
  return (
    <Box>
        <Typography variant='h5' className={styles.infoTitle}>
            Contact Us
        </Typography>
        <Typography className={styles.infoSubtitle}>
            70 Washington Square South, New York, NY 10012, United States
        </Typography>
        <Typography className={styles.infoSubtitle}>
            Email: uilib.help@gmail.com
        </Typography>
        <Typography className={styles.infoSubtitle}>
            Phone: +1 1123 456 780
        </Typography>
        <Box className={styles.iconsContainer}>
            {images.map(({id, img}) => (
                <Box key={id} className={styles.icon}>
                    <Image
                        src={img}
                        alt='contact'
                        width={30}
                        height={30}
                    />
                </Box>
            ))}
        </Box>
        
        
    </Box>
  )
}

export default FooterContacts