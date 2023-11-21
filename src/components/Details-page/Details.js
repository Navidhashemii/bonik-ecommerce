'use client'
import { Box, MenuItem, Select, TextField, Typography } from '@mui/material'
import styles from './Details.module.css'
import { useState } from 'react';

function Details() {

    const [country, setCountry] = useState('');

    const handleCountry = (event) => {
        setCountry(event.target.value);
    };


  return (
    <Box className={styles.detailsContainer}>
        <Box className={styles.column}>
            <Typography 
                variant='subtitle2' 
                className={styles.text}
            >
                Full Name
            </Typography>
            <TextField 
                id="outlined-basic" 
                size='small' 
                variant="outlined" 
                color='secondary'
                className={styles.field} 
            />

            <Typography 
                variant='subtitle2' 
                className={styles.text}
            >
                Phone Number
            </Typography>
            <TextField 
                id="outlined-basic" 
                type='number' 
                size='small' 
                variant="outlined" 
                color='secondary'
                className={styles.field} 
            />

            <Typography 
                variant='subtitle2' 
                className={styles.text}
            >
                Zip Code
            </Typography>
            <TextField 
                id="outlined-basic" 
                type='number' 
                size='small' 
                variant="outlined" 
                className={styles.field} 
                color='secondary'
            />

            <Typography 
                variant='subtitle2' 
                className={styles.text}
            >
                Address 1
            </Typography>
            <TextField 
                id="outlined-basic" 
                type='email' 
                size='small' 
                variant="outlined" 
                color='secondary'
                className={styles.field} 
            />
        </Box>

        <Box className={styles.column}>
        <Typography 
            variant='subtitle2' 
            className={styles.text}
        >
            Email Address
        </Typography>
        <TextField 
            id="outlined-basic" 
            size='small' 
            variant="outlined" 
            color='secondary'
            className={styles.field} 
        />

        <Typography 
            variant='subtitle2' 
            className={styles.text}
        >
            Company
        </Typography>
        <TextField 
            id="outlined-basic" 
            size='small' 
            variant="outlined" 
            color='secondary'
            className={styles.field} 
        />

        <Typography 
            variant='subtitle2' 
            className={styles.text}
        >
            Country
        </Typography>
        <Select
          value={country}
          onChange={handleCountry}
          displayEmpty
          size='small'
          color='secondary'
          sx={{width:"100%"}}
        >
          <MenuItem value="">
            <em>Select...</em>
          </MenuItem>
          <MenuItem value={'us'}>United States</MenuItem>
          <MenuItem value={'uk'}>United Kingdom</MenuItem>
          <MenuItem value={'ind'}>India</MenuItem>
        </Select>

        <Typography 
            variant='subtitle2' 
            className={styles.text}
        >
            Address 2
        </Typography>
        <TextField 
            id="outlined-basic" 
            size='small' 
            variant="outlined" 
            className={styles.field} 
            color='secondary'
        />
        </Box>
    </Box>
  )
}

export default Details