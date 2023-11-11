import { Box, Typography } from '@mui/material'
import styles from './Footer.module.css'
import Image from 'next/image'
import logo from '../../../assets/images/logo.svg'
import google from '../../../assets/images/google.png'
import apple from '../../../assets/images/apple.png'
import DownloadButton from './DownloadButton'
import FooterLinks from './FooterLinks'
import FooterContacts from './FooterContacts'



function Footer() {

    const dlButtons = [
        {image: google, text1: "Get It On", text2: "Google Play"},
        {image: apple, text1: "Download On", text2: "App Store"}
    ]

    const sections = [
        {title: "About Us",
        link1: "Careers",
        link2: "Our Stories",
        link3: "Our Cares",
        link4: "Terms And Conditions",
        link5:"Privacy Policy"},

        {title: "Customer Care",
        link1: "Help Center",
        link2: "How To Buy",
        link3: "Track Your Order",
        link4: "Corporate & Bulk Purchasing",
        link5:"Returns & Refunds"},
    ]


  return (
    <Box className={styles.footerContainer}>
        <Box>
            <Box>
                <Image
                    src={logo}
                    alt='Logo'
                    width={100}
                    height={120}
                    priority
                />
                <Typography variant='subtitle2' className={styles.mainText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. 
                    Erat et lectus vel ut sollicitudin elit at amet.
                </Typography>
                <Box className={styles.downloadButtonsContainer}>
                    <DownloadButton data={dlButtons[0]}/>
                    <DownloadButton data={dlButtons[1]}/>
                </Box>
            </Box>
            <Box className={styles.infoContainer}>
                <FooterLinks section={sections[0]}/>
                <FooterLinks section={sections[1]}/>
                <FooterContacts/>
            </Box>
            

        </Box>
    </Box>
  )
}

export default Footer