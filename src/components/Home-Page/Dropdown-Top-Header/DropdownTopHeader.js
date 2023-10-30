'use client'

import { Box, Button, Divider, List, ListItem } from '@mui/material'
import {useState} from 'react'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Image from 'next/image';

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function DropdownTopHeader({list, options}) {

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
        <Box sx={{width:"80px", height:"100%"}}>
            <Button onClick={handleOpen} sx={{color:"black", width:"100%", height:"100%", color:"white"}}>
                <Image src={select.image} alt='ct' width={22} height={22} style={{marginRight:"5px", borderRadius:"50%", border:"2px solid white"}}/>
                {select.name}
                <ExpandMoreOutlinedIcon/>
            </Button>
            {open ? (

                    <List sx={list}>
                        {options.map(({id, image, name}, index) => (
                            <Box key={id}>
                                <ListItem onClick={() => handleLang({name,id,image})} >
                                    <Button sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", width:"80px", color:"black"}}>
                                        <Image src={image} alt={name} width={25} height={25} style={{marginRight:"8px", borderRadius:"50%", border:"1px solid black"}}/>
                                        {name}
                                    </Button>
                                </ListItem>
                                {index !== options.length - 1 ? <Divider variant='middle' sx={{backgroundColor:"#CACACA"}}/> : null}
                            </Box>
                        ))}
                    </List>
            ) : null}
        </Box>
    </ClickAwayListener>
  )
}

export default DropdownTopHeader