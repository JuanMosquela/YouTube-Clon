import { Box, Stack } from "@mui/system"
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos }) => {

    if(!videos?.length) return <h1>loading...</h1>;

   
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