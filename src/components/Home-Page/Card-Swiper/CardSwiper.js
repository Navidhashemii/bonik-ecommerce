'use client'

import { useState } from "react";
import { Box, Button, Divider, Typography, IconButton, Link } from "@mui/material";
import Rating from '@mui/material/Rating';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './CardSwiper.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import './CardSwiper.css'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../../../redux/cartSlice';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';



function CardSwiper({data}) {

    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    console.log(cart)

    const [elements, setElements] = useState(data.map(item => ({ ...item, selected: false })));

    const handleLike = (id) => {
        const updatedElements = elements.map(element => {
            if (element.id === id) {
                return { ...element, selected: !element.selected };
            }
            return element;
        });
        setElements(updatedElements);
    };

    const getProductQuantity = (id) => {
        const productInCart = cart.find(item => item.id === id);
        return productInCart ? productInCart.quantity : 0;
    };
    

    const handleAddToCart = (id, name, price, image1) => {
        dispatch(addToCart({ id, name , price, image1}));
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };


  return (
    <>
        <Swiper
            modules={[ Navigation ]}
            className={styles.swiperStyles}
            spaceBetween={20}
            navigation={true}
        >
            {data.map(({id, image1, name, price, star, rate, discount, quantity}) => (
                <SwiperSlide key={id}>
                    <Box className={styles.cardContainer}>
                        <Box>
                            <Image
                                src={image1}
                                alt={name}         
                                width={200}
                                height={270}
                                className={styles.cardImage}
                            />
                            <Divider variant="middle"/>
                            <Typography
                                variant="subtitle1"
                                className={styles.cardName}
                            >
                                {name}
                            </Typography>
                        </Box>
                        <Box>
                            {discount 

                            ? 

                            <Box>
                                <Box
                                    bgcolor="secondary.main"
                                    className={styles.discountBox}
                                >
                                    {discount}%
                                </Box>
                                    
                                <Typography
                                    variant="h6"
                                    color="secondary"
                                    className={styles.afterDiscount}
                                >
                                    ${Math.floor(price - ((price * discount) / 100)).toFixed(2)}
                                </Typography>

                                <Typography
                                    variant="subtitle1"
                                    className={styles.beforeDiscount}
                                >
                                    ${price.toFixed(2)}
                                </Typography>
                            </Box>

                            : 

                            <Typography
                                variant="h6"
                                className={styles.price}
                            >
                                ${price.toFixed(2)}
                            </Typography>

                            }

                            <Box className={styles.ratingContainer}>
                                <Rating size="small" value={star}/>
                                <Typography
                                    variant="subtitle2"
                                    className={styles.rateCount}
                                >
                                    ({rate})
                                </Typography>
                            </Box>
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
                                <Typography variant="h6" sx={{color:"white"}}>
                                    {getProductQuantity(id)}
                                </Typography>
                                <IconButton onClick={() => handleAddToCart(id, name)}>
                                    <AddIcon className={styles.quantityIcons}/>
                                </IconButton>
                            </Box> 
                        </Box>
                    
                        :
                        <Button onClick={() => handleAddToCart(id, name, price, image1)} className={styles.button}>
                            Add To Cart
                        </Button>
                        }

                        <IconButton className={styles.icon1}>
                            <VisibilityOutlinedIcon/>
                        </IconButton>
                        
                        {elements.find(element => element.id === id)?.selected
                            ? 
                            <IconButton  onClick={() => handleLike(id)} className={styles.icon2}>
                                <FavoriteIcon/>
                            </IconButton>
                            :
                            <IconButton onClick={() => handleLike(id)} className={styles.icon2}>
                                <FavoriteBorderOutlinedIcon />
                            </IconButton>
                        }
                    </Box>
                </SwiperSlide>
            ))}
            
        </Swiper>

    </>

  )
}

export default CardSwiper