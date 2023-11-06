'use client'

import { Box, TextField } from "@mui/material"
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import styles from './SearchHeader.module.css'
import { useState, useEffect } from "react";

function SearchHeader() {

    const [isScrolled, setIsScrolled] = useState(false);

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


    return (
        <>
        <Box className={`${styles.layoutShift} ${isScrolled ? styles.layoutShiftVisible : ''}`}/>
        <Box bgcolor="common.white" className={`${styles.containerBox} ${isScrolled ? styles.fixed : ''}`}>
            <TextField
                id="outlined-uncontrolled"
                variant="outlined"
                placeholder="Search and hit enter..."
                className={styles.SearchInput}      
                InputProps={{
                style: {borderRadius: "50px",height:"40px"},
                    startAdornment:
                    (
                        <InputAdornment position="start">
                            <SearchOutlined/>
                        </InputAdornment>
                    )
                }}
            />
        </Box>
        
        </>
    

    
  )
}

export default SearchHeader