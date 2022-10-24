import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Searchbar from "./layouts/Searchbar"
import Sidebar from "./layouts/Sidebar"
import Discover from "./pages/Discover/Discover"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative flex">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gradient-to-r from-slate-700 to-emerald-800">
          <Searchbar />
          <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="flex-1 h-fit pb-40">
              <Routes>
                <Route path="/" element={<Discover />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
