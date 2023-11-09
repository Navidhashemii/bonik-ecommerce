import { Typography, Box } from '@mui/material'
import styles from './CartStepper.module.css'
import { useState } from 'react'

function CartStepper({steps}) {

  return (
    <Box className={styles.boxContainer}>
        <Typography className={`${styles.step} ${styles.active}`}>
            1.Cart
        </Typography>
        <Box className={styles.line}/>
        <Typography className={`${styles.step} ${steps === 'details' || steps === 'payment' ? styles.active : ''}`}>
            2.Details
        </Typography>
        <Box className={styles.line}/>
        <Typography className={`${styles.step} ${steps === 'payment' ? styles.active : ''}`}>
            3.Payment
        </Typography>
    </Box>
  )
}

export default CartStepper