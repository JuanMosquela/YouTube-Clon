import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {Box} from '@mui/material'

import {Videos, ChannelCard} from './'
import { fetchFromAPI } from "../utils/fetchFromAPI"


const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null)

  const [videos, setVideos] = useState([])   

  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items))
    
  }, [])  


  return (
    <Box>
      <ChannelCard channelDetail={channelDetail} />
      <Box p={2} sx={{ backgroundColor:'#FFF' }}>
        <Box sx={{ mr: { sm:'100px' } }}>
          <Videos videos={videos} />

        </Box>

      </Box>
    </Box>
  )
}
export default ChannelDetail