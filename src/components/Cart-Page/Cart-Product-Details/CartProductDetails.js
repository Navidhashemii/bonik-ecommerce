'use client'

import { Box, Button, Divider, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import styles from './CartProductDetails.module.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';





function CartProductDetails() {
  
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');

  const cart = useSelector(state => state.cart.items);

  const totalFinalPrices = cart.reduce((accumulator, { price, discount, quantity }) => {
    const finalSinglePrice = discount ? Math.floor(price - (price * discount) / 100) : price;
    return accumulator + finalSinglePrice * quantity;
  }, 0);

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleState = (event) => {
    setState(event.target.value);
  };

  return (
    <>
    {cart.length > 0 && 
    <Box className={styles.detailsContainer}>
      <Box className={styles.totalContiner}>
        <Typography variant='subtitle2' className={styles.totalText}>
          Total:
        </Typography>
        <Typography variant='h6' className={styles.totalPrice}>
          ${totalFinalPrices.toFixed(2)}
        </Typography>
      </Box>
      <Divider/>
      <Box className={styles.additionalContainer}>
        <Typography variant='subtitle2' className={styles.title}>
          Additional Comments
        </Typography>
        <Typography className={styles.redTitle}>
          Note
        </Typography>
      </Box>
      <TextField id="outlined-basic" size='small' variant="outlined" multiline rows={5} className={styles.largeField} color='secondary'/>
      <Divider/>
      <TextField id="outlined-basic" size='small' label="Voucher" variant="outlined" className={styles.field} color='secondary'/>
      <Button className={styles.voucherBtn}>
        Apply Voucher
      </Button>
      <Divider/>
      <Typography variant='subtitle2' className={styles.title2}>
        Shipping Info
      </Typography>
      <Typography className={styles.text}>
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
            <em>Select Country</em>
          </MenuItem>
          <MenuItem value={'us'}>United States</MenuItem>
          <MenuItem value={'uk'}>United Kingdom</MenuItem>
          <MenuItem value={'ind'}>India</MenuItem>
        </Select>

      <Typography className={styles.text}>
        State
      </Typography>
      <Select
          value={state}
          onChange={handleState}
          displayEmpty
          size='small'
          sx={{width:"100%"}}
          color='secondary'
        >
          <MenuItem value="">
            <em>Select State</em>
          </MenuItem>
          <MenuItem value={'us1'}>Chicago</MenuItem>
          <MenuItem value={'us2'}>Arizona</MenuItem>
          <MenuItem value={'uk1'}>London</MenuItem>
          <MenuItem value={'uk2'}>Manchester</MenuItem>
          <MenuItem value={'ind1'}>North India</MenuItem>
          <MenuItem value={'ind2'}>South India</MenuItem>
        </Select>
      <Typography className={styles.text}>
          Zip Code
      </Typography>
      <TextField id="outlined-basic" size='small' variant="outlined" className={styles.lastField} color='secondary'/>
      <Button className={styles.checkoutBtn}>
        Checkout Now
      </Button>
    </Box>
}
    </>
  )
}

export default CartProductDetails