import { Stack } from "@mui/material"
import { categories } from "../utils/constants"

const selectedCategory = 'New'

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
        direction='row'
        sx={{
            
            height:{ sx:'auto', md:'95%' },
            flexDirection:{ md:'column' },                       
            overflowY:'scroll',
            border:'none',
            
        }}
    >
        {categories.map(category => (
            <button 
                onClick={() => setSelectedCategory(category.name)}
                className='category-btn'
                key={category.name}
                style={{ 
                    borderRadius:'15px',
                    backgroundColor: category.name === selectedCategory && '#ccc',
                    color:'#333'
                 }}>
                <span
                    style={{ color: '#000', marginRight: '15px'  }}
                >
                    {category.icon}
                </span>
                <span 
                    
                >
                    {category.name}
                </span>
            </button>
        ))}
        
    </Stack>
  )
}
export default SideBar