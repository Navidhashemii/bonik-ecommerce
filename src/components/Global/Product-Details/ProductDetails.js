'use client'
import styles from './ProductDetails.module.css'
import { Box, Button, IconButton, Rating, Typography } from '@mui/material'
import Image from 'next/image'
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/cartSlice';
import { useState } from 'react';


function ProductDetails({targetProduct, handleCloseModal, modal}) {

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
        handleCloseModal(false)
    }


  return (
   
    <Box className={`${styles.productBox} ${modal && styles.modalProductBox}`}>

        {modal && 
        <Box className={styles.modalCloseBox}>
            <IconButton 
                onClick={handleClose} 
                className={styles.modalCloseIcon}
            >
                <CloseIcon/>
            </IconButton>
        </Box>
        }
                
        <Box className={styles.mainContainer}>
            <Box className={styles.productImagesContainer}>
                <Image
                    src={activeImg}
                    alt={name}
                    width={240}
                    height={300}
                    priority
                    className={styles.mainImg}
                />
                <Box className={styles.productImage}>
                    <Button 
                        onClick={() => handleImg(image1)} 
                        className={`${styles.productImageBtn} ${activeImg === image1 && styles.productActiveImg}`}
                    >
                        <Image
                            src={image1}
                            alt={name}
                            width={60}
                            height={70}
                            priority
                            className={styles.img}
                        />
                    </Button>

                    <Button 
                        onClick={() => handleImg(image2)} 
                        className={`${styles.productImageBtn} ${activeImg === image2 && styles.productActiveImg}`}
                    >
                        <Image
                            src={image2}
                            alt={name}
                            width={60}
                            height={70}
                            priority
                            className={styles.img}
                        />
                    </Button>
                </Box>
            </Box>

            <Box className={styles.productBottomPart}>
                <Box className={styles.productDetails}>
                    <Typography 
                        variant='h3' 
                        className={styles.productName}
                    >
                        {name}
                    </Typography>

                    <Typography 
                        variant='subtitle1' 
                        className={styles.productBrand}
                    >
                        Brand: {brand}
                    </Typography>
                    <Typography 
                        variant='subtitle1' 
                        className={styles.productSeller}
                    >
                        Seller: {seller}
                    </Typography>
                        
                    <Box className={styles.productRatingContainer}>
                        <Typography 
                            variant='subtitle1' 
                            className={styles.productRate}
                        >
                            Rated:
                        </Typography>
                        <Rating 
                            size="small" 
                            value={star} 
                            readOnly
                        />
                        <Typography
                            variant="subtitle2"
                            className={styles.productRateCount}
                        >
                            ({rate})
                        </Typography>
                    </Box>

                    {discount 
                    ? 
                    <Box>
                        {modal && 
                        <Box
                            bgcolor="secondary.main"
                            className={styles.productDiscountBox}
                        >
                            {discount}%
                        </Box>
                        }
                    
                        <Typography
                            variant="h2"
                            color="secondary"
                            className={styles.productAfterDiscount}
                        >
                            ${Math.floor(price - ((price * discount) / 100)).toFixed(2)}
                        </Typography>

                        <Typography
                            variant="h6"
                            className={styles.productBeforeDiscount}
                        >
                            ${price.toFixed(2)}
                        </Typography>
                    </Box>
                    : 
                    <Typography
                        variant="h2"
                        color="secondary"
                        className={styles.productPrice}
                    >
                        ${price.toFixed(2)}
                    </Typography>
                    }

                    <Typography className={styles.productStock}>
                        Stock Available
                    </Typography>
                </Box>

                {getProductQuantity(id) > 0 
                ?
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
                        <Typography 
                            variant="h6" 
                            sx={{color:"black"}}
                        >
                            {getProductQuantity(id)}
                        </Typography>

                        <IconButton onClick={() => handleAddToCart(id, name, price, image1, discount)}>
                            <AddIcon className={styles.quantityIcons}/>
                        </IconButton>
                    </Box> 
                </Box>     
                :
                <Button 
                    onClick={() => handleAddToCart(id, name, price, image1, discount)} 
                    className={styles.productButton}
                >
                    Add To Cart
                </Button>
                }
            </Box>
        </Box>
    </Box>
  )
}

export default ProductDetails