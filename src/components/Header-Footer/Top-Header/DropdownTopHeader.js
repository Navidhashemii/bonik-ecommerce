'use client'

import { Box, Button, Divider, List, ListItem } from '@mui/material'
import {useState} from 'react'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Image from 'next/image';
import styles from './TopHeader.module.css'

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function DropdownTopHeader({langClass, options}) {

    const [open, setOpen] = useState(false)
    const [select, setSelect] = useState(options[0])

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleLang = ({name,id,image}) => {
        setSelect({id, image, name})
        setOpen(!open)
    }
    

    const handleClose = () => {
        setOpen(false)
    }
   

  return (
    <ClickAwayListener onClickAway={handleClose}>
        <Box>
            <Button onClick={handleOpen}  className={styles.mainButton}>
                <Image
                    src={select.image}
                    alt={select.name}
                    width={22}
                    height={22}
                    className={styles.mainButtonImage}
                />
                {select.name}
                <ExpandMoreOutlinedIcon/>
            </Button>

            {open ? (
                    <List className={langClass ? styles.positionLangs : styles.positionPrices}>
                        {options.map(({id, image, name}, index) => (
                            <Box key={id}>
                                <ListItem onClick={() => handleLang({name,id,image})} >
                                    <Button className={styles.listButtons}>
                                        <Image
                                            src={image}
                                            alt={name}
                                            width={25}
                                            height={25}
                                            className={styles.listButtonsImage}
                                        />
                                        {name}
                                    </Button>
                                </ListItem>

                                {index !== options.length - 1
                                ?
                                <Divider variant='middle'/>
                                :
                                null}

                            </Box>
                        ))}
                    </List>
            ) : null}
        </Box>
    </ClickAwayListener>
  )
}

export default DropdownTopHeader