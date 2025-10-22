import { useState } from 'react';
import { Routes ,Route ,Outlet } from 'react-router'
import { CategoryContest } from "./contest/Categories";
import { DataProvider } from "./contest/GetData";
import { FavoritesProvider } from "./contest/Favorites";
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Favorite from './components/Favorite';
import Navbar from "./components/Navbar";
import Genre from "./components/Genre";
import Footer from './components/Footer';
import './App.css';


function App() {

  const Categories = ["Action" ,"Horror" ,"Adventure" ,"Animation" ,"Drama" ,"Comedy"];
  const [showbar ,setShowbar] = useState(false);

  return (
    <div className='grid grid-cols-12 text-neutral-500 font-bold'>
      
      <DataProvider>
        <FavoritesProvider>
          <CategoryContest.Provider value={Categories}>
            {showbar && (<Sidebar/>)}
            <div className={`relative min-h-screen ${showbar ? "col-span-10 vs:max-md:col-span-8" :"col-span-12 vs:max-md:col-span-12"}`}>
              <Navbar sidebar={showbar} setsidebar={setShowbar}/>
              <Routes>
                <Route index element={<Content />} />
                <Route path='/favorites' element={<Favorite />} />
                <Route path='/genres/' element={
                  <>
                    <Outlet />
                  </>}>
                  <Route path=':categoryId' element={<Genre />}/>
                </Route>
              </Routes>
            </div>
            <Footer />
          </CategoryContest.Provider>
        </FavoritesProvider>
      </DataProvider>
    </div>
  )
}

export default App
