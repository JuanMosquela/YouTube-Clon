import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from '../utils/constants'
import SearchBar from "./SearchBar"


const Navbar = () => {
  return (
    <Stack 
        direction='row'
        alignItems='center'      
        sx={{
          padding: { md:'15px 5rem', xs:' 15px 5px' }, 
          position:'sticky',
          background:'#FFF', 
          top:0, 
          height:'30px',
          justifyContent:'space-between', 
          boxShadow:'1px 5px 15px rgba(0,0,0,.1)' }}
     >
        <Link to='/' style={{ display:'flex', alignItems:'center' }}>
            <img src={logo} alt="logo" height={45} />
        </Link>
        <SearchBar />
                

    </Stack>
  )
}
export default Navbar