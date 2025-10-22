import { Routes ,Route ,Outlet } from 'react-router'
import { CategoryContest } from "./contest/Categories";
import { DataProvider } from "./contest/GetData";
import { FavoritesProvider } from "./contest/Favorites";
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Favorite from './components/Favorite';
import Navbar from "./components/Navbar";
import Genre from "./components/Genre";
import './App.css';


function App() {

  const Categories = ["Action" ,"Horror" ,"Adventure" ,"Animation" ,"Drama" ,"Comedy"];

  return (
    <div className='grid grid-cols-12 text-neutral-500 font-bold'>
      
      <DataProvider>
        <FavoritesProvider>
          <CategoryContest.Provider value={Categories}>
            <Sidebar/>
            <div className='col-span-10 vs:max-md:col-span-8 relative'>
              <Navbar />
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
          </CategoryContest.Provider>
        </FavoritesProvider>
      </DataProvider>
    </div>
  )
}

export default App
