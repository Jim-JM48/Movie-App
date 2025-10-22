import { useEffect, useContext } from "react";
import { GetDataContest } from "../contest/GetData";
import { FavoritesContest } from "../contest/Favorites";
import Cards from "../shared/Cards";
import Toast from "../shared/Toast";

export default function Favorite() {
  const { contestData, isError } = useContext(GetDataContest);
  const { favoriteData, toggleFavorite } = useContext(FavoritesContest);

  useEffect(() => {
    toggleFavorite(contestData);
  }, [contestData]);

  if (!isError) {
    if (favoriteData.length > 0) {
      return (
        <>
          <div className="p-4 text-red-500 text-2xl text-center">
            Favorite List
          </div>
          <div className="flex flex-wrap justify-evenly gap-y-4 my-4">
            {favoriteData.map((mov, index) => {
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
            })}
          </div>
        </>
      );
    } else {
      return (
        <h1 className="relative top-1/3 text-2xl font-bold text-center text-rose-600">
          No Favorite List
        </h1>
      );
    }
  } else {
    return (
      <Toast />
    )
  }
}
