import { Box, Link, Typography } from '@mui/material'
import styles from './Footer.module.css'


function FooterLinks({section}) {

    const {title, link1, link2, link3, link4, link5} = section

  return (
    <Box className={styles.LinksContainer}>
        <Typography variant='h5' className={styles.infoTitle}>
            {title}
        </Typography>
        <Link underline='none' className={styles.infoSubtitle}>
            {link1}
        </Link>
        <Link underline='none' className={styles.infoSubtitle}>
            {link2}
        </Link>
        <Link underline='none' className={styles.infoSubtitle}>
            {link3}
        </Link>
        <Link underline='none' className={styles.infoSubtitle}>
            {link4}
        </Link>
        <Link underline='none' className={styles.infoSubtitle}>
            {link5}
        </Link>
    </Box>
  )
}

export default FooterLinks