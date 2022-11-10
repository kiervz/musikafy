import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Searchbar from "./layouts/Searchbar"
import Sidebar from "./layouts/Sidebar"
import Discover from "./pages/discover/Discover"
import MusicPlayer from './components/music-player/MusicPlayer';

const App = () => {
  const { activeSong } = useSelector((state: any) => state.player);

  return (
    <BrowserRouter>
      <div className="relative flex">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gradient-to-l from-slate-700 to-emerald-800">
          <Searchbar />
          <div className="px-6 h-[calc(100vh-24px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="flex-1 h-fit pb-40">
              <Routes>
                <Route path="/" element={<Discover />} />
              </Routes>
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
