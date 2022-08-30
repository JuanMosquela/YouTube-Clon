import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

   

   
  return (
    <Card sx={{ width: {md: '320px', xs:'100%'}}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: 358, height:180}}
                />
           
        </Link>
        <CardContent sx={{ height:106 }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography
                    sx={{ fontSize:'15px', marginBottom:'7px' }}                    
                    fontWeight='bold'
                    color='#000'>
                        {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}

                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography
                    sx={{
                        display:'flex',                        
                        alignItems:'center',
                        fontSize:'12px'
                    }}
                    
                    fontWeight='bold'
                    color='gray'>
                        {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
                        <CheckCircle sx={{ fontSize:'12px', ml:'7px' }} />
                        

                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}
export default VideoCard