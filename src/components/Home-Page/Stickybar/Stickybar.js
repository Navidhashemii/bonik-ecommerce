'use client'

import { Box, Button } from '@mui/material'
import styles from './Stickybar.module.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Stickybar() {
    const cart = useSelector(state => state.cart.items);

    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    const [active, setActive] = useState('home')

    const handleActive = (tag) => {
        setActive(tag)
    }

  return (
    <Box className={styles.container}>
        <Button onClick={() => handleActive('home')} className={styles.barButton}>
            {active === 'home' ?
            <HomeIcon className={styles.icon}/>
            :
            <HomeOutlinedIcon className={styles.icon}/>
            }
            Home
        </Button>
        <Button onClick={() => handleActive('category')} className={styles.barButton}>
            {active === 'category' ?
            <DashboardIcon className={styles.icon}/>
            :
            <DashboardOutlinedIcon className={styles.icon}/>
            }
            Category
        </Button>
        <Button onClick={() => handleActive('cart')} className={styles.barButton}>
            {active === 'cart' ?
            <LocalMallIcon className={styles.icon}/>
            :
            <LocalMallOutlinedIcon className={styles.icon} sx={{position:"relative"}}/>
            }
            Cart
            {totalCount > 0 ? 
            <Box className={styles.cartCounter}>
                {totalCount}
            </Box>
            : 
            null
            }
        </Button>
        <Button onClick={() => handleActive('profile')} className={styles.barButton}>
            {active === 'profile' ?
            <PersonIcon className={styles.icon}/>
            :
            <PersonOutlineOutlinedIcon  className={styles.icon}/>
            }
            Profile
        </Button>

    </Box>
  )
}

export default Stickybar