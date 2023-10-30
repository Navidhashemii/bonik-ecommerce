import { Box, Typography } from "@mui/material"
import DropdownTopHeader from "../../Home-Page/Dropdown-Top-Header/DropdownTopHeader"
import usa from '../../../assets/images/usa.png'
import uk from '../../../assets/images/uk.png'
import ind from '../../../assets/images/in.png'

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

  const positionListPrices = {listStyle:"none",position:"absolute", top:"36px", left:"min( calc(100vw - 210px) , 1002px )", zIndex:"10",backgroundColor:"white", borderRadius:"10px", boxShadow:"-3px 5px 20px grey"}
  const positionListLang = {listStyle:"none",position:"absolute", top:"36px", left:"min( calc(100vw - 130px) , 1002px )", zIndex:"10",backgroundColor:"white", borderRadius:"10px", boxShadow:"-3px 5px 20px grey"}

  return (
    <>
        <Box sx={{
        height:"42px",
        width:"100%",
        backgroundColor:"#0F3460",
        overflow:"hidden",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"0 16px",
        }} >
            <Box>
                <Typography sx={{
                fontSize:"24px",
                color:"#E94560",
                fontWeight:"bold",
                fontStyle:"italic"
                 }}>Bonik</Typography>
            </Box>
            <Box sx={{display:"flex"}}>
              <DropdownTopHeader list={positionListPrices} options={langs}/>
              <DropdownTopHeader list={positionListLang} options={prices}/>
            </Box>
            
            


        </Box>   
    
    </>
  )
}

export default TopHeader