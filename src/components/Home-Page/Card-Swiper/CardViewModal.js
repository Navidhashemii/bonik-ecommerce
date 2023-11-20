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
import ProductDetails from '../../Global/Product-Details/ProductDetails';

function CardViewModal({data, targetId, handleCloseModal}) {
    
    const [targetProduct] = data.filter(({id}) => id === targetId)

  return (
    <Box className={styles.modalContainer}>
        <ProductDetails targetProduct={targetProduct} handleCloseModal={handleCloseModal} modal={true}/>
    </Box>
  )
}

export default CardViewModal