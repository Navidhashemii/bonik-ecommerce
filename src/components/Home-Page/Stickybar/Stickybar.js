'use client'

import { Badge, Box, Button } from '@mui/material'
import styles from './Stickybar.module.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Stickybar() {

    const cart = useSelector(state => state.cart.items);
    
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const pathName = usePathname()
    const cartPaths = ['/cart', '/cart/details', '/cart/details/payment'];
  return (
    <Box className={styles.container}>
        <Link href='/'>
            <Button className={styles.barButton}>
                {pathName === '/' ?
                <HomeIcon className={styles.icon}/>
                :
                <HomeOutlinedIcon className={styles.icon}/>
                }
                Home
            </Button>
        </Link>
        <Link href='/categories'>
            <Button className={styles.barButton}>
                {pathName === '/categories' ?
                <DashboardIcon className={styles.icon}/>
                :
                <DashboardOutlinedIcon className={styles.icon}/>
                }
                Category
            </Button>
        </Link>
        <Link href='/cart'>
            <Button className={styles.barButton}>
                {cartPaths.includes(pathName) ?
                <Badge badgeContent={totalCount} color='secondary' max={99}>
                    <LocalMallIcon className={styles.icon}/>
                </Badge>
                :
                <Badge badgeContent={totalCount} color='secondary' max={99}>
                    <LocalMallOutlinedIcon className={styles.icon}/>
                </Badge>
                }
                Cart
            </Button>
        </Link>
        <Button className={styles.barButton}>
            {pathName === '/profile' ?
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