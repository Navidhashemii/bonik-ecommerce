'use client'

import { useState } from "react";
import { Box, Button, Divider, Typography, IconButton, Checkbox } from "@mui/material";
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
import { addToCart, removeFromCart } from '../../../redux/cartSlice';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CardViewModal from "./CardViewModal";
import Link from "next/link";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';



function CardSwiper({data, notCategoryBased}) {

    const [showModal, setShowModal] = useState(false)
    const [targetId, setTargetId] = useState(null)


    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    

    const getProductQuantity = (id) => {
        const productInCart = cart.find(item => item.id === id);
        return productInCart ? productInCart.quantity : 0;
    };

    const breakPoints = notCategoryBased
    ? 
    {
        500: {
          slidesPerView: 2,
        },
        700: {
            slidesPerView: 3,
        },
        900:{
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        }
    }
    :
    {
        500: {
          slidesPerView: 2,
        },
        700: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    };

    

    const handleAddToCart = (id, name, price, image1, discount) => {
        dispatch(addToCart({ id, name , price, image1, discount}));
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };


    const handleOpenModal = (id) => {
        setShowModal(true)
        setTargetId(id)
    };

    const handleCloseModal = (value) => {
        setShowModal(value)
    }


  return (
    <Box className={!notCategoryBased && styles.mainContainer}>
        <Swiper
            modules={[ Navigation ]}
            className={styles.swiperStyles}
            spaceBetween={20}
            navigation={true}
            slidesPerView={1}
            breakpoints={breakPoints}
        >
            {data.map(({id, image1, name, price, star, rate, discount}) => (
                <SwiperSlide key={id} style={{minWidth:'201px'}}>
                    <Box className={styles.cardContainer}>
                        <Link href={`/products/${id}`}>
                            <Box>
                                <Image
                                    src={image1}
                                    alt={name}         
                                    width={190}
                                    height={240}
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
                                    <Rating size="small" value={star} readOnly/>
                                    <Typography
                                        variant="subtitle2"
                                        className={styles.rateCount}
                                    >
                                        ({rate})
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>

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

                        <IconButton onClick={() => handleOpenModal(id)} className={styles.icon1}>
                            <VisibilityOutlinedIcon/>
                        </IconButton>
                        <Checkbox color="secondary" icon={<FavoriteBorder />} checkedIcon={<Favorite />} className={styles.icon2} />
                        
                    </Box>
                </SwiperSlide>
            ))}
            
        </Swiper>

        {showModal && <CardViewModal data={data} targetId={targetId} handleCloseModal={handleCloseModal}/>}

    </Box>

  )
}

export default CardSwiper