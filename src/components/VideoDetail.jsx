import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Skeleton, CircularProgress } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet&statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

   
  if(!videoDetail?.snippet) return (
    <Box sx={{ display: 'flex', backgroundColor:'#FFF', justifyContent:'center', alignItems:'center', minHeight:'95vh' }}>
      <CircularProgress />
    </Box>
  )  ;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  console.log(videoDetail)

  return (
    <Box minHeight="95vh" sx={{ backgroundColor:'#FFF' }}>
      <Stack direction={{ md: "row", xs: "column" }} sx={{ backgroundColor:'#FFF' }}>
        <Box flex={3} sx={{ backgroundColor:'#FFF' }}>
          <Box sx={{ width: "100%", top: "86px", backgroundColor:'#FFF' }}>            
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />            
            <Typography variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }} sx={{
                        display:'flex',                        
                        alignItems:'center',
                        fontSize:'15px'
                    }}  >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "15px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ color:'#000', fontSize:'15px'}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{color:'#000', fontSize:'15px' }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
              
            </Stack>
          </Box>
        </Box>
        <Box flex={1} px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
        
      </Stack>
    </Box>
  );
};

export default VideoDetail;