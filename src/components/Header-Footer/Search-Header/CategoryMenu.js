import { Box, ClickAwayListener,Button } from '@mui/material'
import Link from 'next/link'
import styles from './SearchHeader.module.css'

function CategoryMenu({categories, handleMenu}) {
  return (
   
        <Box className={styles.menuDropDown}>
            {categories.map(({id, name}) => (
                <Link key={id} href={`/categories#${id}`}>
                    <Button onClick={handleMenu} variant="text" className={styles.menuBtns}>
                        {name}
                    </Button>      
                </Link>
            ))}
        </Box>

  )
}

export default CategoryMenu