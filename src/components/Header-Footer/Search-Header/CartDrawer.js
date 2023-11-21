import { Box, Button, ClickAwayListener, IconButton, Typography } from '@mui/material'
import styles from './SearchHeader.module.css'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../../../redux/cartSlice';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import Link from 'next/link';


function CartDrawer({handleClickAwayDrawer}) {

    let finalPrice;
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    const getProductQuantity = (id) => {
        const productInCart = cart.find(item => item.id === id);
        return productInCart ? productInCart.quantity : 0;
    };

    const totalFinalPrices = cart.reduce((accumulator, { price, discount, quantity }) => {
        const finalSinglePrice = discount ? Math.floor(price - (price * discount) / 100) : price;
        return accumulator + finalSinglePrice * quantity;
      }, 0);
    
  
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
    <Box 
        className={styles.drawerMainContainer}
    >
        <ClickAwayListener 
            onClickAway={() => handleClickAwayDrawer(false)}
        >
            <Box className={styles.drawerContent}>
                <Box className={styles.drawerCartCountBox}>
                    <LocalMallOutlinedIcon className={styles.drawerCartIcon}/>
                    <Typography 
                        variant='h6' 
                        className={styles.drawerCartCountText}
                    >
                        {totalCount} Items
                    </Typography>
                </Box>
                <Box className={styles.drawerCardsContainer}>
                    {cart.map(({id, name, image1, price, discount, quantity}) => (
                        <Box 
                            key={id} 
                            className={styles.drawerCard}
                        >
                            <Box className={styles.drawerBtns}>
                                {getProductQuantity(id) < 2

                                ?

                                <IconButton onClick={() => handleRemoveFromCart(id)}>
                                    <DeleteIcon className={styles.drawerCardIcon}/>
                                </IconButton>

                                :
                                    
                                <IconButton onClick={() => handleRemoveFromCart(id)}>
                                    <RemoveIcon className={styles.drawerCardIcon}/>
                                </IconButton>

                                }

                                <Typography 
                                    variant="h6" 
                                    sx={{color:"black"}}
                                >
                                    {getProductQuantity(id)}
                                </Typography>

                                <IconButton onClick={() => handleAddToCart(id, name, price, image1, discount)}>
                                    <AddIcon className={styles.drawerCardIcon}/>
                                </IconButton>
                            </Box>
                            <Box className={styles.drawerImgBox}>
                                <Image
                                    src={image1}
                                    alt={name}
                                    width={70}
                                    height={90}
                                />
                            </Box>
                            <Box className={styles.drawerCardDetails}>
                                <Typography 
                                    variant='h6' 
                                    className={styles.drawerCardDetailsName}
                                >
                                    {name}
                                </Typography>
                                <Box className={styles.drawerCardDetailsPricePart}>
                                    {discount
                                    ? 
                                    <Typography 
                                        variant='subtitle2' 
                                        className={styles.drawerCardDetailsPrice}
                                    >
                                        ${finalPrice = Math.floor(price - ((price * discount) / 100)).toFixed(2)} x {quantity}
                                    </Typography>
                                    :
                                    <Typography 
                                        variant='subtitle2' 
                                        className={styles.drawerCardDetailsPrice}
                                    >
                                        ${finalPrice = price.toFixed(2)} x {quantity}
                                    </Typography>
                                    }

                                    <Typography 
                                        variant='h6' 
                                        className={styles.drawerCardDetailsFinalPrice}
                                    >
                                        ${(finalPrice * quantity).toFixed(2)}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
                {cart.length > 0 
                ?
                <Box className={styles.bottomPart}>
                    <Box 
                        onClick={handleClearCart} 
                        className={styles.bottomPartClearBox}
                    >
                        <DeleteIcon className={styles.clearIcon}/>
                        <Typography className={styles.clearText}>
                            All
                        </Typography>
                    </Box>
                    <Box className={styles.bottomPartCartBtns}>
                        <Link href='/cart'>
                            <Button 
                                onClick={() => handleClickAwayDrawer(false)} 
                                className={styles.bottomPartBtn1}
                            >
                                View Cart
                            </Button>
                        </Link>
                        <Link href='/cart/details'>
                            <Button 
                                onClick={() => handleClickAwayDrawer(false)} 
                                className={styles.bottomPartBtn2}
                            >
                                Checkout Now (${totalFinalPrices.toFixed(2)})
                            </Button>
                        </Link>
                    </Box>
                </Box>
                : 
                null
                }
            </Box>
        </ClickAwayListener>
    </Box>
  )
}

export default CartDrawer