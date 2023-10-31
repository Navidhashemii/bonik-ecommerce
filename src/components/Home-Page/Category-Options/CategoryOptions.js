import { Card, CardMedia, Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';


function CategoryOptions({data}) {
    
const categories = data.categories


  return (
    <Grid container spacing={2} >
        {categories.map(({id, name, image}) => (
            <Grid key={id} xs={6} sx={{marginBottom:"-24px"}}>
                <Box 
                    sx={{
                        position:"relative",
                        width:"100%",
                        maxWidth:"100%",
                        aspectRatio:"1/1",
                        marginTop:"25px",
                    }}
                >


                    <Image 
                        src={image}
                        fill
                        alt='category image'
                        sizes='(max-width: 768px) 100vh, 700px'
                        style={{borderRadius:"8px"}}
                    />


                    <Button 
                        sx={{
                            position:'absolute',
                            width:"90%",
                            height:"25%",
                            top: "82%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            color:"black",
                            backgroundColor:"rgba(220,220,220,0.6)",
                            fontSize:"18px",
                            fontWeight:"bold",
                            textTransform:"capitalize"
                            }}
                    >
                        {name}
                    </Button>
                </Box>

            </Grid>
        ))}

    </Grid>
  )
}

export default CategoryOptions