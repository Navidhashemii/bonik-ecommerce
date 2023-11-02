import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import styles from './CategoryOptions.module.css'


function CategoryOptions({data}) {

    const categories = data.categories

  return (
    <Grid container spacing={2} >
        {categories.map(({id, name, image}) => (
            <Grid key={id} xs={6} className={styles.grid}>
                <Box className={styles.boxContainer}>
                    <Image 
                        src={image}
                        fill
                        alt={name}
                        sizes='(max-width: 768px) 100vh, 700px'
                        className={styles.categoryImage}
                    />
                    <Button className={styles.button}>
                        {name}
                    </Button>
                </Box>

            </Grid>
        ))}

    </Grid>
  )
}

export default CategoryOptions