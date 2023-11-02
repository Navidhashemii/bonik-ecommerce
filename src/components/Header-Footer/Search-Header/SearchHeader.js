import { Box, TextField } from "@mui/material"
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import styles from './SearchHeader.module.css'

function SearchHeader() {
  return (
        <Box bgcolor="common.white" className={styles.containerBox}>
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
    

    
  )
}

export default SearchHeader