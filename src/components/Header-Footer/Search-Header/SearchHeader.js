'use client'

import { Badge, Box, Button, IconButton, TextField } from "@mui/material"
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import styles from './SearchHeader.module.css'
import logo from '../../../assets/images/logo.svg'
import { useState, useEffect } from "react";
import Image from "next/image";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CategoryMenu from "./CategoryMenu";
import { useSelector } from 'react-redux';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Link from "next/link";
import { usePathname } from "next/navigation";


function SearchHeader({data}) {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenMenuIcon, setIsOpenMenuIcon] = useState(false);

    const pathName = usePathname()

    const cart = useSelector(state => state.cart.items);
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    const categories = data.categories

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 40) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleMenu = () => {
      setIsOpenMenu(prev => !prev)
    }

    const handleClickAwayMenu = () => {
      setIsOpenMenu(false)
    }

    const handleMenuIcon = () => {
      setIsOpenMenuIcon(prev => !prev)
    }

    const handleClickAwayMenuIcon = () => {
      setIsOpenMenuIcon(false)
    }




    return (
        <>
        <Box className={`${styles.layoutShift} ${isScrolled ? styles.layoutShiftVisible : ''}`}/>
        <Box bgcolor="common.white" className={`${styles.containerBox} ${isScrolled ? styles.fixed : ''}`}>
          <Box className={styles.innerContainer}>
            <Box className={styles.leftPart}>
              <Link href='/'>
                <Image 
                  src={logo}
                  alt='Logo'
                  width={100}
                  height={52}
                />
              </Link>
              {isScrolled && pathName !== '/categories' &&
                <ClickAwayListener onClickAway={handleClickAwayMenuIcon}>
                  <Box>
                    <IconButton onClick={handleMenuIcon}>
                      <CategoryIcon className={styles.categoryBtnIcon}/>
                    </IconButton>
                    {isOpenMenuIcon && 
                      <CategoryMenu categories={categories} handleMenu={handleMenuIcon}/>
                    }
                  </Box>
                </ClickAwayListener>
              }
            </Box>
            <TextField
                id="outlined-uncontrolled"
                variant="outlined"
                placeholder="Search and hit enter..."
                className={styles.SearchInput}      
                color='secondary'
                InputProps={{
                  style: {borderRadius: "50px",height:"42px"},
                  startAdornment:
                    (
                      <InputAdornment position="start">
                        <SearchOutlined className={styles.searchIcon}/>
                      </InputAdornment>
                    )
                }}
            />

            <Box className={styles.rightPart}>
              <IconButton className={styles.btnIcon1}>
                <PersonOutlineOutlinedIcon className={styles.icons}/>
              </IconButton>
              <Link href='/cart'>
                <IconButton className={styles.btnIcon2}>
                  <Badge badgeContent={totalCount} color='secondary' max={99}>
                    <LocalMallOutlinedIcon className={styles.icons}/>
                  </Badge>
                </IconButton>
              </Link>
            </Box>

          </Box>
        </Box>
            {pathName !== '/categories' &&
        <Box bgcolor="common.white" className={styles.categoryContainerPart}>
          <Box className={styles.categoryInnerContainerPart}>
              <ClickAwayListener onClickAway={handleClickAwayMenu}>
                <Box>
                  <Button
                    variant="contained"
                    onClick={handleMenu}
                    startIcon={<CategoryIcon />}
                    endIcon={<ArrowForwardIosIcon className={isOpenMenu ? styles.arrowIconDown : styles.arrowIcon}/>}
                    className={styles.categoryBtnMenu}
                  >
                    Categories
                  </Button>
                  {isOpenMenu &&
                    <CategoryMenu categories={categories} handleMenu={handleMenu}/>
                  }
                </Box>
              </ClickAwayListener>
          </Box>
        </Box>
            }
        
        </>
    

    
  )
}

export default SearchHeader