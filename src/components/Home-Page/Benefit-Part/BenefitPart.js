import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Box, Paper } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import styles from './BenefitPart.module.css'




function BenefitPart() {
  return (
    <Box className={styles.mainContainer}>
        <Grid container >
            <Grid
                xs={12}
                md={6}
                xl={3}
            >
                <Paper
                    elevation={0}
                    className={styles.paperContainer}
                >
                    <LocalShippingOutlinedIcon className={styles.icon}/>
                    <Box className={`${styles.textContainer} ${styles.divider1}`}>
                        <Typography
                            variant='h6'
                            className={styles.title}
                        >
                            Fast Delivery
                        </Typography>

                        <Typography
                            variant='h6'
                            className={styles.subTitle}
                        >
                            starts from $10
                        </Typography>  
                    </Box>

                    <Box className={styles.divider1}/>
                </Paper>

            </Grid>

            <Grid
                xs={12} 
                md={6}
                xl={3}
            >
                <Paper
                    elevation={0}
                    className={styles.paperContainer}
                >
                    <PaidOutlinedIcon className={styles.icon}/>
                    <Box className={`${styles.textContainer} ${styles.divider2}`}>
                        <Typography
                            variant='h6'
                            className={styles.title}
                        >
                            Money Guarantee
                        </Typography>

                        <Typography
                            variant='h6'
                            className={styles.subTitle}
                        >
                            7 Days Back
                        </Typography>  
                    </Box>
                </Paper>
            </Grid>

            <Grid
                xs={12}
                md={6}
                xl={3}
            >
                <Paper
                    elevation={0}
                    className={styles.paperContainer}
                >
                    <TimerOutlinedIcon className={styles.icon}/>
                    <Box className={`${styles.textContainer} ${styles.divider3}`}>
                        <Typography
                            variant='h6'
                            className={styles.title}
                        >
                            365 Days
                        </Typography>

                        <Typography
                            variant='h6' 
                            className={styles.subTitle}
                        >
                            For free return
                        </Typography>  
                    </Box>
                    <Box className={styles.divider2}/>
                </Paper>
            </Grid>
            
            <Grid 
                xs={12}
                md={6} 
                xl={3}
            >
                <Paper
                    elevation={0} 
                    className={styles.paperContainer}
                >
                    <SecurityOutlinedIcon className={styles.icon}/>
                    <Box className={styles.textContainer}>
                        <Typography
                            variant='h6'
                            className={styles.title}
                        >
                            Payment
                        </Typography>

                        <Typography
                            variant='h6'
                            className={styles.subTitle}
                        >
                            Secure system
                        </Typography>  
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    </Box>
  )
}

export default BenefitPart