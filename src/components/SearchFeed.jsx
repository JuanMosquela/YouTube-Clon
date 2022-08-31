import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import Videos from "./Videos"

const SearchFeed = () => {

  const [videos, setVideos] = useState([])

  const { searchTerm } = useParams()


    useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
    
      
    }, [searchTerm])





  return (
    <Box p={2} sx={{ overflowY:'auto', height:'90vh', flex:2, backgroundColor:'#FFF' }}>
            <Typography
                variant="h4"
                fontWeight='bold'
                mb={2}
                sx={{
                    color:'#333'
                }}
                >
                  Resultados de busqueda de
                
                <span style={{ color:'#F31503' }}> {searchTerm}:</span>
            </Typography>

            <Videos videos={videos} />


        </Box>
  )
}
export default SearchFeed