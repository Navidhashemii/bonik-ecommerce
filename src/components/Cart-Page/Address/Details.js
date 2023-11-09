import { Box, Checkbox, MenuItem, Select, TextField, Typography } from '@mui/material'
import styles from './Address.module.css'
import { useState } from 'react';

function Details({address}) {

    const [country, setCountry] = useState('');
    const [checked, setChecked] = useState();

    const handleCountry = (event) => {
        setCountry(event.target.value);
    };


  return (
    <>
        
        <Typography variant='subtitle2' className={styles.text}>
            Full Name
        </Typography>
        <TextField id="outlined-basic" size='small' variant="outlined" className={styles.field} color='secondary'/>

        <Typography variant='subtitle2' className={styles.text}>
            Phone Number
        </Typography>
        <TextField id="outlined-basic" type='number' size='small' variant="outlined" className={styles.field} color='secondary'/>

        <Typography variant='subtitle2' className={styles.text}>
            Zip Code
        </Typography>
        <TextField id="outlined-basic" type='number' size='small' variant="outlined" className={styles.field} color='secondary'/>

        <Typography variant='subtitle2' className={styles.text}>
            Address 1
        </Typography>
        <TextField id="outlined-basic" type='email' size='small' variant="outlined" className={styles.field} color='secondary'/>

        <Typography variant='subtitle2' className={styles.text}>
            Email Address
        </Typography>
        <TextField id="outlined-basic" size='small' variant="outlined" className={styles.field} color='secondary'/>

        <Typography variant='subtitle2' className={styles.text}>
            Company
        </Typography>
        <TextField id="outlined-basic" size='small' variant="outlined" className={styles.field} color='secondary'/>

        <Typography variant='subtitle2' className={styles.text}>
            Country
        </Typography>
        <Select
          value={country}
          onChange={handleCountry}
          displayEmpty
          size='small'
          sx={{width:"100%"}}
          color='secondary'
        >
          <MenuItem value="">
            <em>Select...</em>
          </MenuItem>
          <MenuItem value={'us'}>United States</MenuItem>
          <MenuItem value={'uk'}>United Kingdom</MenuItem>
          <MenuItem value={'ind'}>India</MenuItem>
        </Select>

        <Typography variant='subtitle2' className={styles.text}>
            Address 2
        </Typography>
        <TextField id="outlined-basic" size='small' variant="outlined" className={styles.field} color='secondary'/>

    </>   
  )
}

export default Details