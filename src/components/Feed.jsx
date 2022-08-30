import { Box, Skeleton, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { SideBar, Videos } from './'



const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New')

    const [videos, setVideos] = useState([])

    const [loading, setLoading] = useState(true)


    useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items)).then(() => setLoading(false))
    
      
    }, [selectedCategory])

    console.log(videos)
    



  return (
    <Stack sx={{ backgroundColor:'#FFF', flexDirection: { sx: 'column', md: 'row'} }}>
        <Box sx={{  height: { s: 'auto', md:'92vh' },  px: { sx:0, md:2 }}}>
            <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Typography
                className="copyright"
                variant="body2"
                sx={{ mt:1.5, color:'#FFF' }}
                >
                    Copyright 2022 Youtube Clon


            </Typography>

        </Box>
        <Box p={2} sx={{ overflowY:'auto', height:'90vh', flex:2 }}>
            <Typography
                variant="h4"
                
                mb={2}
                sx={{
                    color:'#333'
                }}
                >
                {selectedCategory} videos
                
            </Typography>

            {
                loading ? (
                    <Stack sx={{ display:'flex', justifyContent:'center', gap:'1rem', flexWrap:'wrap', flexDirection: { sx: 'column', md: 'row'} }}>
                        <Box sx={{ width: { md:'280px', xs:'100%'} }} >
                            <Skeleton variant="rectangular" sx={{ width:'100%' }} height={188} />
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton sx={{ fontSize:'2rem' }} />
                                <Skeleton sx={{ fontSize:'2rem' }} width="60%" />
                            </Box>

                        </Box>
                        <Box sx={{ width: { md:'280px', xs:'100%'} }} >
                            <Skeleton variant="rectangular" sx={{ width:'100%' }} height={188} />
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton sx={{ fontSize:'2rem' }} />
                                <Skeleton sx={{ fontSize:'2rem' }} width="60%" />
                            </Box>

                        </Box>
                        <Box sx={{ width: { md:'280px', xs:'100%'} }} >
                            <Skeleton variant="rectangular" sx={{ width:'100%' }} height={188} />
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton sx={{ fontSize:'2rem' }} />
                                <Skeleton sx={{ fontSize:'2rem' }} width="60%" />
                            </Box>

                        </Box>
                        <Box sx={{ width: { md:'280px', xs:'100%'} }} >
                            <Skeleton variant="rectangular" sx={{ width:'100%' }} height={188} />
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton sx={{ fontSize:'2rem' }} />
                                <Skeleton sx={{ fontSize:'2rem' }} width="60%" />
                            </Box>

                        </Box>
                        <Box sx={{ width: { md:'280px', xs:'100%'} }} >
                            <Skeleton variant="rectangular" sx={{ width:'100%' }} height={188} />
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton sx={{ fontSize:'2rem' }} />
                                <Skeleton sx={{ fontSize:'2rem' }} width="60%" />
                            </Box>

                        </Box>
                        <Box sx={{ width: { md:'280px', xs:'100%'} }} >
                            <Skeleton variant="rectangular" sx={{ width:'100%' }} height={188} />
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton sx={{ fontSize:'2rem' }} />
                                <Skeleton sx={{ fontSize:'2rem' }} width="60%" />
                            </Box>

                        </Box>
                        <Box sx={{ width: { md:'280px', xs:'100%'} }} >
                            <Skeleton variant="rectangular" sx={{ width:'100%' }} height={188} />
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton sx={{ fontSize:'2rem' }} />
                                <Skeleton sx={{ fontSize:'2rem' }} width="60%" />
                            </Box>

                        </Box>
                        <Box sx={{ width: { md:'280px', xs:'100%'} }} >
                            <Skeleton variant="rectangular" sx={{ width:'100%' }} height={188} />
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton sx={{ fontSize:'2rem' }} />
                                <Skeleton sx={{ fontSize:'2rem' }} width="60%" />
                            </Box>

                        </Box>
                        <Box sx={{ width: { md:'280px', xs:'100%'} }} >
                            <Skeleton variant="rectangular" sx={{ width:'100%' }} height={188} />
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton sx={{ fontSize:'2rem' }} />
                                <Skeleton sx={{ fontSize:'2rem' }} width="60%" />
                            </Box>

                        </Box>
                        <Box sx={{ width: { md:'280px', xs:'100%'} }} >
                            <Skeleton variant="rectangular" sx={{ width:'100%' }} height={188} />
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton sx={{ fontSize:'2rem' }} />
                                <Skeleton sx={{ fontSize:'2rem' }} width="60%" />
                            </Box>

                        </Box>
                        <Box sx={{ width: { md:'280px', xs:'100%'} }} >
                            <Skeleton variant="rectangular" sx={{ width:'100%' }} height={188} />
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton sx={{ fontSize:'2rem' }} />
                                <Skeleton sx={{ fontSize:'2rem' }} width="60%" />
                            </Box>

                        </Box>
                        <Box sx={{ width: { md:'280px', xs:'100%'} }} >
                            <Skeleton variant="rectangular" sx={{ width:'100%' }} height={188} />
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton sx={{ fontSize:'2rem' }} />
                                <Skeleton sx={{ fontSize:'2rem' }} width="60%" />
                            </Box>

                        </Box>
                        <Box sx={{ width: { md:'280px', xs:'100%'} }} >
                            <Skeleton variant="rectangular" sx={{ width:'100%' }} height={188} />
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton sx={{ fontSize:'2rem' }} />
                                <Skeleton sx={{ fontSize:'2rem' }} width="60%" />
                            </Box>

                        </Box>
                        <Box sx={{ width: { md:'280px', xs:'100%'} }} >
                            <Skeleton variant="rectangular" sx={{ width:'100%' }} height={188} />
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton sx={{ fontSize:'2rem' }} />
                                <Skeleton sx={{ fontSize:'2rem' }} width="60%" />
                            </Box>

                        </Box>
                        <Box sx={{ width: { md:'280px', xs:'100%'} }} >
                            <Skeleton variant="rectangular" sx={{ width:'100%' }} height={188} />
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton sx={{ fontSize:'2rem' }} />
                                <Skeleton sx={{ fontSize:'2rem' }} width="60%" />
                            </Box>

                        </Box>
                        
                        
                        
                        
                        
                        
                    </Stack>
                    

                ) : (

                    <Videos videos={videos} />
                )

            }



        </Box>

    </Stack>
    
  )
}
export default Feed