import { Box, Typography } from "@mui/material"
import DropdownTopHeader from "./DropdownTopHeader"
import usa from '../../../assets/images/usa.png'
import uk from '../../../assets/images/uk.png'
import ind from '../../../assets/images/in.png'
import styles from './TopHeader.module.css'
import Image from "next/image"
import logo from '../../../assets/images/logo.svg'

function TopHeader() {

  const langs = [
    {id: 1 , image: usa, name:"US"},
    {id: 2 , image: uk, name:"UK"},
    {id: 3 , image: ind, name:"IN"},
  ]
  const prices = [
    {id: 1 , image: usa, name:"USD"},
    {id: 2 , image: uk, name:"EUR"},
    {id: 3 , image: ind, name:"INR"},
  ]
  

  return (
        <Box bgcolor="headerFooter.main" className={styles.topHeaderContainer}>
            <Box className={styles.logoImageContainer}>
                <Image 
                  src={logo}
                  alt='Logo'
                  width={80}
                  height={100}
                />
            </Box>
            <Box sx={{display:"flex"}}>
              <DropdownTopHeader langClass={true} options={langs}/>
              <DropdownTopHeader langClass={false} options={prices}/>
            </Box>
        </Box>   
  )
}

export default TopHeader