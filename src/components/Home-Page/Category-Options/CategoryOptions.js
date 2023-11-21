import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import styles from './CategoryOptions.module.css'
import Link from 'next/link';


function CategoryOptions({data}) {
  return (
    <Grid container spacing={2} >
        {data.categories.map(({id, name, image}) => (
            <Grid
                key={id} 
                xs={6} 
                sm={4} 
                md={3} 
                lg={3} 
                xl={2} 
                className={styles.grid}
            >
                <Link href={`/categories#${id}`}>
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
                </Link>

            </Grid>
        ))}

    </Grid>
  )
}

export default CategoryOptions