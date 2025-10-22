import { useState  ,createContext } from 'react';

const FavoritesContest = createContext();

const FavoritesProvider = ({children}) => {
  const [favoriteData ,setFavoriteData] = useState([]);

  const toggleFavorite = (dataList) => {
    setFavoriteData(dataList.filter((data) => {
      return data.Favorite == true;
    }))
  }

  return(
    <FavoritesContest.Provider value={{favoriteData ,toggleFavorite}}>
        {children}
    </FavoritesContest.Provider>
  )
}

export {FavoritesContest ,FavoritesProvider}