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
    const cart = useSelector((state) => state.cart.items);
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const pathName = usePathname();
  
    const renderButton = (path, text, Icon, OutlinedIcon) => (
      <Link href={path}>
        <Button className={styles.barButton}>
          {pathName === path ? (
              <Icon className={styles.icon} />
          ) : (
              <OutlinedIcon className={styles.icon} />
          )}
          {text}
        </Button>
      </Link>
    );
  
    return (
      <Box className={styles.container}>
        {renderButton("/", "Home", HomeIcon, HomeOutlinedIcon)}
        {renderButton("/categories", "Category", DashboardIcon, DashboardOutlinedIcon)}
        <Link href='/cart'>
          <Button className={styles.barButton}>
            {pathName === "/cart" ? (
              <Badge badgeContent={totalCount} color="secondary" max={99}>
                <LocalMallIcon className={styles.icon} />
              </Badge>
            ) : (
              <Badge badgeContent={totalCount} color="secondary" max={99}>
                <LocalMallOutlinedIcon className={styles.icon} />
              </Badge>
            )}
            Cart
          </Button>
        </Link>

        <Button className={styles.barButton}>
          {pathName === "/profile" ? (
            <PersonIcon className={styles.icon} />
          ) : (
            <PersonOutlineOutlinedIcon className={styles.icon} />
          )}
          Profile
        </Button>
      </Box>
    );
  }

export default Stickybar