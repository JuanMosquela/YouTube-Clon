import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from '../utils/constants'
import SearchBar from "./SearchBar"


const Navbar = () => {
  return (
    <Stack 
        direction='row'
        alignItems='center' 
      
        sx={{padding: '15px 5rem', position:'sticky', background:'#FFF', top:0, justifyContent:'space-between' }}
     >
        <Link to='/' style={{ display:'flex', alignItems:'center' }}>
            <img src={logo} alt="logo" height={45} />
        </Link>
        <SearchBar />
                

    </Stack>
  )
}
export default Navbar