import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Searchbar from "./layouts/Searchbar";
import Sidebar from "./layouts/Sidebar";
import MusicPlayer from './components/music-player/MusicPlayer';
import Discover from "./pages/discover/Discover";
import TopPlay from './pages/top-play/TopPlay';
import SongDetails from './pages/song-detail/SongDetail';
import Search from './pages/search/Search';

const App = () => {
  const { activeSong } = useSelector((state: any) => state.player);

  return (
    <BrowserRouter>
      <div className="relative flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gradient-to-l from-[#3A8891] to-[#0E5E6F] ">
          <Searchbar />
          <div className="px-6 h-[calc(100vh-24px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="flex-1 h-fit pb-40">
              <Routes>
                <Route path="/" element={<Discover />} />
                <Route path="/songs/:songid" element={<SongDetails />} />
                <Route path="/search/:searchTerm" element={<Search />} />
              </Routes>
            </div>
            <div className='xl:sticky relative top-0 h-fit'>
              <TopPlay />
            </div>
          </div>
        </div>

        {activeSong?.title && (
          <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-white/5 bg-opacity-80 backdrop-blur-sm backdrop-blur-lg rounded-t-3xl z-10">
            <MusicPlayer />
          </div>
        )}
      </div>
    </BrowserRouter>
  )
}

export default App
