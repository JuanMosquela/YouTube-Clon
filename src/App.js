import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from './components';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>    
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={ <Feed />} />
        <Route path='/video/:id' element={ <VideoDetail />} />
        <Route path='/channel/:id' element={ <ChannelDetail />} />
        <Route path='/search/:searchTerm' element={ <SearchFeed />} />

      </Routes>
    
    </BrowserRouter>   
    
  );
}

export default App;
