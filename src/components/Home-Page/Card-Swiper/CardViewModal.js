'use client'

import { Box, Button, Divider, IconButton, Rating, Typography } from '@mui/material'
import styles from './CardSwiper.module.css'
import Image from 'next/image'
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/cartSlice';
import { useState } from 'react';

function CardViewModal({data, targetId, setShowModal}) {
    
    const [targetProduct] = data.filter(({id}) => id === targetId)
    const {id, name, image1, image2, price, brand, seller, rate, star, discount} = targetProduct
    const [activeImg, setActiveImg] = useState(image1)


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

    const handleImg = (img) => {
        setActiveImg(img)
    }

    const handleClose = () => {
        setShowModal(false)
    }
    

  return (
    <Box className={styles.modalContainer}>
        <Box className={styles.modalBox}>
            <Box className={styles.modalCloseBox}>
                <IconButton onClick={handleClose} className={styles.modalCloseIcon}>
                    <CloseIcon/>
                </IconButton>
            </Box>
            <Box className={styles.modalImagesContainer}>
                <Image
                    src={activeImg}
                    alt={name}
                    width={240}
                    height={300}
                />
                <Box className={styles.modalImage}>
                    <Button onClick={() => handleImg(image1)} className={`${styles.modalImageBtn} ${activeImg === image1 && styles.modalActiveImg}`}>
                        <Image
                            src={image1}
                            alt={name}
                            width={60}
                            height={70}
                        />
                    </Button>
                    <Button onClick={() => handleImg(image2)} className={`${styles.modalImageBtn} ${activeImg === image2 && styles.modalActiveImg}`}>
                        <Image
                            src={image2}
                            alt={name}
                            width={60}
                            height={70}
                        />
                    </Button>
                </Box>
            </Box>

            <Box className={styles.modalDetails}>
               <Typography variant='h3' className={styles.modalName}>
                    {name}
               </Typography>


               <Typography variant='subtitle1' className={styles.modalBrand}>
                    Brand: {brand}
               </Typography>
               <Typography variant='subtitle1' className={styles.modalSeller}>
                    Seller: {seller}
               </Typography>
               
               <Box className={styles.ratingContainer}>
                    <Typography variant='subtitle1' className={styles.modalRate}>
                        Rated:
                    </Typography>
                    <Rating size="small" value={star} readOnly/>
                    <Typography
                        variant="subtitle2"
                        className={styles.rateCount}
                    >
                        ({rate})
                    </Typography>
                </Box>

                {discount 

                ? 

                <Box>
                    <Box
                        bgcolor="secondary.main"
                        className={styles.modalDiscountBox}
                    >
                        {discount}%
                    </Box>
        
                    <Typography
                        variant="h2"
                        color="secondary"
                        className={styles.modalAfterDiscount}
                    >
                        ${Math.floor(price - ((price * discount) / 100)).toFixed(2)}
                    </Typography>

                    <Typography
                        variant="h6"
                        className={styles.beforeDiscount}
                    >
                        ${price.toFixed(2)}
                    </Typography>
                </Box>

                : 

                <Typography
                    variant="h2"
                    color="secondary"
                    className={styles.modalPrice}
                >
                    ${price.toFixed(2)}
                </Typography>

                }

                <Typography className={styles.modalStock}>
                    Stock Available
                </Typography>
            </Box>

            {getProductQuantity(id) > 0 ?
                <Box className={styles.quantityContainer}>
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
                    
                        :

                        <Button onClick={() => handleAddToCart(id, name, price, image1, discount)} className={styles.button}>
                            Add To Cart
                        </Button>
                        }
        </Box>
    </Box>
  )
}

export default CardViewModal