'use client'
import { Box, Checkbox, Typography, Button } from '@mui/material'
import styles from './Details.module.css'
import { useState } from 'react';
import Details from './Details';
import Link from 'next/link';

function BillingAddress() {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

  return (
    <>
    <Box className={styles.boxContainer}>
        <Typography 
            variant='subtitle2' 
            className={styles.title}
        >
            Billing Address
        </Typography>
        
        <Box className={styles.check}>
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                color='secondary'
                size='small'
            />
            Same as shipping address
        </Box>
        {checked
        ?
        null
        :
        <Details/>
        }
    </Box>
    <Box className={styles.paymentContainer}>
        <Link 
            href='/cart' 
            style={{width:"100%"}}
        >
            <Button className={styles.backBtn}>
                Back to Cart
            </Button>
        </Link>
        <Link 
            href='/cart/details/payment' 
            style={{width:'100%'}}
        >
            <Button className={styles.nextBtn}>
                Proceed to Payment
            </Button>
        </Link>
    </Box>
    </>
  )
}

export default BillingAddress