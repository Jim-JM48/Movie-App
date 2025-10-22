import { useState ,useEffect ,createContext } from 'react';
import axios from "axios";
import meta from "../assets/moviesSimple.json"

const GetDataContest = createContext();

const DataProvider = ({children}) => {
  let titlesData  = [...meta.movies , ...meta.series];;
  const [contestData ,setContestData] = useState([]);
  const [loaded ,setLoaded] = useState(false);
  const [isError ,setIsError] = useState(false);

  useEffect(()=> {
    const fetchData = () => {
      let url = "https://www.omdbapi.com";
      return titlesData.map( async (title) => {
          const response = await axios.get(url,{
            params : {
              i : title,
              apikey : Env.ApiKey
            },
          })
          return {
              ...response.data ,
              Favorite : false
            };
      });
    }
    Promise.all(fetchData())
    .then((res) => {setContestData(res);setLoaded(true)})
    .catch(() => {setIsError(true)})
  } ,[])

  return(
    <GetDataContest.Provider value={{contestData ,setContestData ,loaded ,setLoaded ,isError}}>
        {children}
    </GetDataContest.Provider>
  )
}

export {GetDataContest ,DataProvider}