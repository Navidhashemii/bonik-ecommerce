import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import styles from './CartTotalPayment.module.css'
import { useSelector } from 'react-redux';

function CartTotalPayment() {

    const cart = useSelector(state => state.cart.items);

    const totalFinalPrices = cart.reduce((accumulator, { price, discount, quantity }) => {
      const finalSinglePrice = discount ? Math.floor(price - (price * discount) / 100) : price;
      return accumulator + finalSinglePrice * quantity;
    }, 0);
  
  return (
    <Box className={styles.boxContainer}>
        <Box className={styles.section}>
            <Typography className={styles.text}>
                Subtotal:
            </Typography>
            <Typography variant='h6' className={styles.price}>
                ${totalFinalPrices.toFixed(2)}
            </Typography>
        </Box>
        <Box className={styles.section}>
            <Typography className={styles.text}>
                Shipping:
            </Typography>
            <Typography variant='h6' className={styles.price}>
                $14.00
            </Typography>
        </Box>
        <Box className={styles.section}>
            <Typography className={styles.text}>
                Tax:
            </Typography>
            <Typography variant='h6' className={styles.price}>
                $8.00
            </Typography>
        </Box>
        <Box className={styles.section}>
            <Typography className={styles.text}>
                Discount:
            </Typography>
            <Typography variant='h6' className={styles.price}>
                -
            </Typography>
        </Box>
        <Divider/>
        <Typography variant='h4' className={styles.totalPrice}>
        ${(totalFinalPrices + 22).toFixed(2) }
        </Typography>
        <TextField id="outlined-basic" size='small' label="Voucher" variant="outlined" className={styles.field} color='secondary'/>
        <Button className={styles.voucherBtn}>
            Apply Voucher
        </Button>

    </Box>
  )
}

export default CartTotalPayment