import { useEffect, useContext } from "react";
import { GetDataContest } from "../contest/GetData";
import { FavoritesContest } from "../contest/Favorites";
import useLocalStorage from "../hooks/useLocalStorage";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "../styles/Card.css";

export default function Cards(props) {
  
  const { contestData ,setContestData} = useContext(GetDataContest);
  const { favoriteData } = useContext(FavoritesContest);

  const [ ,,initLocal ] = useLocalStorage();

  const handleFavorite = (title) => {
    return setContestData(
      contestData.map((mov) => {
        if(mov.Title === title) {
          return {
            ...mov,
            Favorite : !mov.Favorite
          }
        }else {
          return mov;
        }
      })
    );

  }

  useEffect(() => {
    initLocal(favoriteData.map(data => data.Title));
  } ,[favoriteData])


  return (
    <Card sx={{ width: 200 ,textAlign: "center" }}>
      <div className="flex justify-center gap-1" aria-label="rates">
          <p>IMDB :</p>
          <StarIcon sx={{color : "var(--color-amber-300)"}}/>
          <p>{props.rates}</p>
      </div>
      <CardMedia
        component="img"
        sx={{ width: "100%", aspectRatio: 1 }}
        image={props.image}
        alt="poster"
      />
      <CardContent sx={{ height: 90 }}>
        <Typography
          gutterBottom
          sx={{ color: "text.Primary", fontSize: 14, fontWeight: "bolder" }}
        >
          {props.title.length < 14
            ? props.title
            : props.title.slice(0, 13) + "..."}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "var(--color-neutral-700)", fontSize: 12}}
        >
          <span className="font-extrabold">&</span> {props.desc}
        </Typography>
        <FavoriteIcon data-favorite={props.favorite} sx={{cursor:'pointer'}} onClick={() => handleFavorite(props.title)} />
      </CardContent>
    </Card>
  );
}
