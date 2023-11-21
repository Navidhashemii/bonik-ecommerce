import { Box, Button, IconButton, Typography } from "@mui/material"
import DropdownTopHeader from "./DropdownTopHeader"
import usa from '../../../assets/images/usa.png'
import uk from '../../../assets/images/uk.png'
import ind from '../../../assets/images/in.png'
import styles from './TopHeader.module.css'
import Image from "next/image"
import logo from '../../../assets/images/logo.svg'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link"



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


function TopHeader() { 
  return (
        <Box 
          bgcolor="headerFooter.main" 
          className={styles.MainContainer}
        >
          <Box className={styles.MainInnerContainer}>
            <Box className={styles.logoImageContainer}>
              <Link href='/'>
                <Image 
                  src={logo}
                  alt='Logo'
                  width={80}
                  height={100}
                />
              </Link>
            </Box>
            <Box className={styles.contactContainer}>
              <Button 
                variant="text" 
                startIcon={<PhoneIcon />} 
                className={styles.phoneContact}
              >
                +989134402027
              </Button>

              <Button 
                variant="text" 
                startIcon={<EmailIcon />} 
                className={styles.emailContact}
              >
                Nhashemi007@yahoo.com
              </Button>
            </Box>
            <Box className={styles.rightContainer}>
              <Button
                variant="text" 
                className={styles.helpButton}
              >
                Need Help?
              </Button>
              <Box className={styles.rightContainerBtnsBox}>
                <DropdownTopHeader langClass={true} options={langs}/>
                <DropdownTopHeader langClass={false} options={prices}/>
              </Box>
            </Box>
          </Box>
        </Box>   
  )
}

export default TopHeader