import { useState, useEffect, useContext } from "react";
import { GetDataContest } from "../contest/GetData";
import { FavoritesContest } from "../contest/Favorites";
import Cards from "../shared/Cards";
import Carsoul from "../shared/Carsoul";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Toast from "../shared/Toast";


export default function Content() {
  const [current, setCurrent] = useState("movie");

  const [movies, setMovies] = useState([]);

  const { contestData ,isError } = useContext(GetDataContest);
  const { toggleFavorite } = useContext(FavoritesContest);

  useEffect(() => {
    const filterData = () => {
      return contestData.filter((data) => {
        return data.Type === current;
      });
    };

    setMovies(filterData());
    toggleFavorite(contestData);
  }, [contestData, current]);

  return (
    <>
      <Carsoul />
      <div className="py-6 text-2xl font-extrabold">
        <Stack direction="row" justifyContent={"center"} spacing={2} >
          <Chip sx={{fontSize:"1rem"}} label="Movies" color='warning' onClick={() => {setCurrent("movie");}} />
          <span>/</span>
          <Chip sx={{fontSize:"1rem"}} label="Tv Show" color='warning' onClick={() => {setCurrent("series");}} />
        </Stack>
      </div>
      <div className="flex flex-wrap justify-evenly gap-y-4 my-6">
        {!isError && (
          movies.map((mov, index) => {
            return (
              <Cards
                key={index}
                title={mov.Title}
                image={mov.Poster}
                desc={mov.Director}
                rates={mov.imdbRating}
                favorite={mov.Favorite}
              />
            );
          })
        ) }
        {isError && (
          <Toast />
        )}
      </div>
    </>
  );
}
