import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { CategoryContest } from "../contest/Categories";
import { GetDataContest } from "../contest/GetData";
import { FavoritesContest } from "../contest/Favorites";
import Cards from "../shared/Cards";
import Toast from "../shared/Toast";

export default function Genre() {
  let { categoryId } = useParams();

  const [genre, setGenre] = useState([]);

  const Categories = useContext(CategoryContest);
  const { contestData ,isError } = useContext(GetDataContest);
  const { toggleFavorite } = useContext(FavoritesContest);

  useEffect(() => {
    if (Categories.includes(categoryId)) {
      const filterData = () => {
        return contestData.filter((data) => {
          return data.Genre.includes(categoryId);
        });
      };
      setGenre(filterData());
    }
    toggleFavorite(contestData)
  }, [contestData, categoryId]);

  if (Categories.includes(categoryId)) {
    return (
      <>
        <div className="p-4 text-amber-400 text-2xl">Genre {categoryId} :</div>
        <div className="flex flex-wrap justify-evenly gap-y-4 my-4">
          {!isError && (
            genre.map((mov, index) => {
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
          )}
          {isError && (
            <Toast />
          )}
        </div>
      </>
    );
  } else {
    return (
      <h1 className="relative top-1/3 text-2xl font-bold text-center text-rose-600">
        Genre Not Found
      </h1>
    );
  }
}
