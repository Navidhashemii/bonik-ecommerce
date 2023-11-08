import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../../../redux/cartSlice';
import { Box, IconButton, Typography } from '@mui/material';
import styles from './CartProductCard.module.css'
import Image from 'next/image';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

function CartProductCard() {

    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    console.log(cart)
    let finalPrice 

    const getProductQuantity = (id) => {
      const productInCart = cart.find(item => item.id === id);
      return productInCart ? productInCart.quantity : 0;
  };
  

  const handleAddToCart = (id, name, price, image1, discount) => {
      dispatch(addToCart({ id, name , price, image1, discount}));
  };

  const handleRemoveFromCart = (id) => {
      dispatch(removeFromCart(id));
  };

  return (
    <Box>
        {cart.map(({id, name, image1, price, discount, quantity}) => (
            <Box key={id} className={styles.cardContainer}>
                <Image
                    src={image1}
                    alt={name}
                    width={180}
                    height={230}
                    priority
                />

                <Typography variant='h6' className={styles.cardName}>
                  {name}
                </Typography>

                <Box className={styles.bottomPart}>
                    <Box className={styles.pricePart}>
                        {discount
                        ? 
                        <Typography className={styles.price}>
                            ${finalPrice = Math.floor(price - ((price * discount) / 100)).toFixed(2)} x {quantity}
                        </Typography>
                        :
                        <Typography className={styles.price}>
                            ${finalPrice = price.toFixed(2)} x {quantity}
                        </Typography>
                        }

                        <Typography className={styles.finalPrice}>
                            ${(finalPrice * quantity).toFixed(2)}
                        </Typography>
                    </Box>

                  
                    <Box className={styles.quantityOptions}>
                        {getProductQuantity(id) < 2

                        ?

                        <IconButton onClick={() => handleRemoveFromCart(id)}>
                            <DeleteIcon className={styles.quantityIcons}/>
                        </IconButton>

                        :
                            
                        <IconButton onClick={() => handleRemoveFromCart(id)}>
                            <RemoveIcon className={styles.quantityIcons}/>
                        </IconButton>

                        }

                        <Typography variant="h6" sx={{color:"black"}}>
                            {getProductQuantity(id)}
                        </Typography>

                        <IconButton onClick={() => handleAddToCart(id, name, price, image1, discount)}>
                            <AddIcon className={styles.quantityIcons}/>
                        </IconButton>

                    </Box> 
                </Box>
            </Box>
        ))}
    </Box>
  )
}

export default CartProductCard