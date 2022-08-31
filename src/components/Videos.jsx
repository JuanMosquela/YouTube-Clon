import { Skeleton } from "@mui/material";
import { Box, Stack } from "@mui/system"
import { VideoCard, ChannelCard } from './'


const Videos = ({ videos }) => {

    console.log(videos)

    if(!videos?.length) return (
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
                            </Box>s

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
        
                            
    );

   
  return (
    <Stack
        direction='row'
        flexWrap='wrap'
        justifyContent='center'
        gap={2}
        

    >
        {videos.map((item, idx) => (
            <Box
                key={idx}
            >
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
                
            </Box>
        ))}
        
    </Stack>
  )
}
export default Videos