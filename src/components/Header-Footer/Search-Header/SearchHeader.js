import { Box, TextField, Typography } from "@mui/material"
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';

function SearchHeader() {
  return (
    <>
        <Box sx={{
        width:"100%",
        height:"60px",
        backgroundColor:"white",
        }}>
            <Box sx={{
            display: 'flex',
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"}}>
                <TextField
                id="outlined-uncontrolled"
                variant="outlined"
                placeholder="Search and hit enter..."
                sx={{width:"90%", marginTop:"10px"}}      
                InputProps={{
                    style: {borderRadius: "50px",height:"40px"},
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlined />
                        </InputAdornment>
                    )
                }}
                
                />
            </Box>
        </Box>
    

    </>
  )
}

export default SearchHeader