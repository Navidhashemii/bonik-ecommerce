'use client'
import { Box, Button, Divider, Typography } from '@mui/material';
import styles from './ProductPage.module.css'
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { useRef, useState } from 'react';

function FrequentlyProducts({targetWithDiscount}) {

    const [addClicked, setAddClicked] = useState(false)
    const dispatch = useDispatch();

    const randomizedItems = useRef(targetWithDiscount.sort(() => Math.random() - 0.5).slice(0,4))



    const { sum, sumWithDiscount, discount } = randomizedItems.current.reduce(
        (accumulator, item) => {
          const price = item.price;
          const discountedPrice = Math.floor(price - (price * item.discount) / 100);
      
          return {
            sum: accumulator.sum + price,
            sumWithDiscount: accumulator.sumWithDiscount + discountedPrice,
            discount: accumulator.sum + price - (accumulator.sumWithDiscount + discountedPrice),
          };
        },
        { sum: 0, sumWithDiscount: 0, discount: 0 }
      );
    // console.log(randomizedItems)

    const handleAddToCart = () => {
        randomizedItems.current.map(({id, name, price, image1, discount}) => (
            dispatch(addToCart({ id, name , price, image1, discount}))
        ))
        setAddClicked(true)
    };

  return (
    <>
        <Typography className={styles.frqTitle}>
            Frequently Bought Together
        </Typography>
        <Box className={styles.frqContainer}>
        {randomizedItems.current.map(({id, name, price, discount, image1}, index) => {
        {index += 1}
        return (
            <Box key={id} sx={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            
            <Box className={styles.frqCard}>
                <Box className={styles.frqImgContainer}>
                    <Image
                        src={image1}
                        alt={name}
                        fill
                        sizes='(max-width: 768px) 100vh, 700px'
                        style={{aspectRatio:"16/9"}}
                    />
                </Box>
                <Divider sx={{width:'70%'}} />
                <Typography variant='subtitle1' className={styles.frqName}>
                    {name}
                </Typography>
              
                    <Typography variant='h6' color='secondary' className={styles.frqAfterDiscount}>
                        ${Math.floor(price - ((price * discount) / 100)).toFixed(2)}
                    </Typography>
                    <Typography className={styles.frqBeforeDiscount}>
                        ${price.toFixed(2)}
                    </Typography>
            </Box>
            {index < 4 && 
                <AddIcon color='secondary' sx={{margin:"15px"}}/>
            }
            </Box>
        )})}
        <DragHandleIcon color='secondary' sx={{margin:"15px"}}/>
        <Box className={styles.frqSumupContainer}>
            {!addClicked ?
            <>
            <Typography color='secondary' variant='h5' className={styles.frqSumup}>
                ${sumWithDiscount.toFixed(2)}
            </Typography>
            <Typography variant='subtitle1' className={styles.frqDiscount}>
                Save ${discount.toFixed(2)}
            </Typography>
            <Button onClick={() => handleAddToCart(randomizedItems.current)} className={styles.frqBtn}>
                Add To Cart
            </Button>
            </>
            :
            <Typography variant='h6' sx={{width:"100%", textAlign:"center", fontWeight:"600" , color:"#3e3e3e"}}>
                Items Added To Your Cart Successfully
            </Typography>
            
            }
        </Box>
    </Box>
    </>
  )
}

export default FrequentlyProducts