import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Box, Paper } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import styles from './BenefitPart.module.css'




function BenefitPart() {
    const benefitItems = [
      {
        icon: <LocalShippingOutlinedIcon className={styles.icon} />,
        title: 'Fast Delivery',
        subTitle: 'starts from $10',
        divider: styles.divider1
      },
      {
        icon: <PaidOutlinedIcon className={styles.icon} />,
        title: 'Money Guarantee',
        subTitle: '7 Days Back',
        divider: styles.divider2
      },
      {
        icon: <TimerOutlinedIcon className={styles.icon} />,
        title: '365 Days',
        subTitle: 'For free return',
        divider: styles.divider3
      },
      {
        icon: <SecurityOutlinedIcon className={styles.icon} />,
        title: 'Payment',
        subTitle: 'Secure system',
        divider: ''
      }
    ];
  
    return (
      <Box className={styles.mainContainer}>
        <Grid container>
          {benefitItems.map((item, index) => (
            <Grid
              key={index}
              xs={12}
              md={6}
              xl={3}
            >
              <Paper
                elevation={0}
                className={styles.paperContainer}
              >
                {item.icon}
                <Box className={`${styles.textContainer} ${item.divider}`}>
                  <Typography
                    variant='h6'
                    className={styles.title}
                  >
                    {item.title}
                  </Typography>
  
                  <Typography
                    variant='h6'
                    className={styles.subTitle}
                  >
                    {item.subTitle}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

export default BenefitPart