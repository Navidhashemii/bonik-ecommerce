'use client'
import { Box, IconButton, Rating, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import styles from './ProductPage.module.css'
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cartSlice';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useRef } from 'react';

function BrandBasedProducts({targetBrandBased}) {
    const randomizedItems = useRef(targetBrandBased.sort(() => Math.random() - 0.5).slice(0,4))

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

  return (
    <Box className={styles.brandContainer}>
        <Typography className={styles.brandTitle}>
            More From {randomizedItems.current[0].brand.toUpperCase()}
        </Typography>
        <Grid container spacing={3}>
            {randomizedItems.current.map(({id, name, star, image1, brand, price, discount}) => (
                <Grid key={id} xs={12}>
                    <Box className={styles.brandCard}>
                        <Box className={styles.brandImgContainer}>
                            <Image
                                src={image1}
                                alt={name}
                                width={250}
                                height={300}
                                priority
                            />
                        </Box>
                        <Typography className={styles.brandName}>
                            {name}
                        </Typography>
                        <Rating value={star} size='small' readOnly/>
                        <Typography variant='subtitle2' className={styles.brandBrand}>
                            {brand}
                        </Typography>
                        <Box className={styles.brandPriceContainer}>
                            <Box className={styles.brandPriceBox}>
                                {discount ? 
                                <>
                                <Typography color='secondary' variant='h6' className={styles.brandFinalPrice}>
                                    ${Math.floor(price - ((price * discount) / 100)).toFixed(2)}
                                </Typography>
                                <Typography className={styles.brandBeforeDiscount}> 
                                    ${price.toFixed(2)}
                                </Typography>
                                </>
                                :
                                <Typography color='secondary' variant='h6' className={styles.brandFinalPrice}>
                                    ${price.toFixed(2)}
                                </Typography>
                                }
                            </Box>
                            <IconButton onClick={() => handleAddToCart(id, name, price, image1, discount)} color='secondary' className={styles.brandAddBtn}>
                                <AddIcon/>
                            </IconButton>
                            {getProductQuantity(id) > 0 && 
                            <Box className={styles.brandMoreBox}>
                                <Typography>
                                    {getProductQuantity(id)}
                                </Typography>
                                {getProductQuantity(id) < 2 ?
                                    <IconButton onClick={() => handleRemoveFromCart(id)} color='secondary' className={styles.brandRemoveBtn}>
                                        <DeleteIcon/>
                                    </IconButton>
                                :
                                    <IconButton onClick={() => handleRemoveFromCart(id)} color='secondary' className={styles.brandRemoveBtn}>
                                        <RemoveIcon/>
                                    </IconButton>
                                }
                            </Box>
                            }

                        </Box>
                    </Box>
                </Grid>
            ))}

        </Grid>

    </Box>
  )
}

export default BrandBasedProducts