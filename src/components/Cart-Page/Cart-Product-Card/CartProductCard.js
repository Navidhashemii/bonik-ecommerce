'use client'

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../../../redux/cartSlice';
import { Box, IconButton, Typography } from '@mui/material';
import styles from './CartProductCard.module.css'
import Image from 'next/image';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

function CartProductCard() {

    let finalPrice; 

    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    

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

  const handleClearCart = () => {
    dispatch(clearCart());
};

  

  return (
    <Box className={styles.mainContainer}>
        {cart.map(({id, name, image1, price, discount, quantity}) => (
            <Box key={id} className={styles.cardContainer}>
                <Box>
                    <Image
                        src={image1}
                        alt={name}
                        width={180}
                        height={210}
                        priority
                        className={styles.img}
                    />
                </Box>
                <Box className={styles.bottomPart}>
                    <Box sx={{height:"10%"}}>
                        <Typography variant='h6' className={styles.cardName}>
                        {name}
                        </Typography>
                    </Box>
                    <Box className={styles.detailsPart}>
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
            </Box>
        ))}

        {cart.length > 0
        
        ? 

        <IconButton onClick={handleClearCart} className={styles.clearBtn}>
            <Typography className={styles.clearText}>
                Clear Cart
            </Typography>
            <DeleteIcon className={styles.clearIcon}/>
        </IconButton>

        :

        
        <Box className={styles.emptyCart}>
            <Typography variant='h2' className={styles.emptyCartText}>
                Your cart is empty!
            </Typography>
        </Box>
        }
    </Box>
  )
}

export default CartProductCard