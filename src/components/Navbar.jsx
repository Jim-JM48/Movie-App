import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router";
import { GetDataContest } from "../contest/GetData";
import { FavoritesContest } from "../contest/Favorites";
import useLocalStorage from "../hooks/useLocalStorage";
import Badge from '@mui/material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import '../styles/Navbar.css';

export default function Navbar(props) {

  const [counter ,setCounter] = useState(0);

  const { favoriteData } = useContext(FavoritesContest);
  const { contestData ,setContestData ,loaded ,setLoaded} = useContext(GetDataContest);
  const [ favor ] = useLocalStorage();

  useEffect(() => {
    handleStorage()
    setCounter(favoriteData.length);

  }, [favoriteData]);

  function handleStorage()  {
    const parsed = JSON.parse(favor ? favor : '[]');
    if(favoriteData.length == 0 && parsed.length > 0 && loaded) {
      setContestData(
        contestData.map((data) => {
          if(parsed.includes(data.Title)) {
            return {
              ...data,
              Favorite : true
            }
          }else {
            return data;
          }
        })
      )
      setLoaded(false);
    }
  }

  return (
    <nav className="px-3 py-3 w-full right-0 z-10 bg-stone-900 vs:max-md:fixed">    
        <ul id="list" className="me-4 space-x-5 flex items-center text-neutral-400">
            <SettingsIcon onClick={() => props.setsidebar(!props.sidebar)} id="icon" fontSize='large'/>
            <span className="text-xl font-bold text-rose-600 ms-auto">MOVIES</span>
            <div className='ml-auto space-x-4'>
              <NavLink to="/">
                <HomeIcon id="icon" fontSize='large'/>
              </NavLink>
              <NavLink to="/favorites">
                <Badge badgeContent={counter} color="error" >
                  <PersonIcon id="icon" fontSize='large'/>
                </Badge>
              </NavLink>
            </div>
        </ul>
    </nav>
  )
}
