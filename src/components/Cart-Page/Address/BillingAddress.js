'use client'
import { Box, Checkbox, Typography } from '@mui/material'
import styles from './Address.module.css'
import { useState } from 'react';
import Details from './Details';

function BillingAddress() {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

  return (
    <Box className={styles.boxContainer}>
        <Typography variant='subtitle2' className={styles.title}>
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
  )
}

export default BillingAddress