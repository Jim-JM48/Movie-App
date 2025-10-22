import { useEffect, useState } from "react";
import cover1 from "../assets/cover-1.webp";
import cover2 from "../assets/cover-2.webp";
import cover3 from "../assets/cover-3.webp";
import cover4 from "../assets/cover-4.webp";
import Button from "@mui/material/Button";
import Arrow from "./Arrow";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { Blurhash } from "react-blurhash";

export default function Carsoul() {
  const [id, setId] = useState(0);
  const [process ,setProcess] = useState(false);

  let coversList = [cover1, cover2, cover3, cover4];
  
  useEffect(() => {
    setProcess(false);
    const img = new Image();
    img.onload = () => {
      setProcess(true);
    }
    img.src = coversList[id];
  } ,[id])

  const changeCover = {
    nextCover: function () {
      return id == 3 ? null : setId(id + 1);
    },
    prevCover: function () {
      return id == 0 ? null : setId(id - 1);
    },
  };

  const imageStyle = {
    backgroundImage: `url(${coversList[id]})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      {!process && (
        <Blurhash
          hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
          width="100%"
          height={320}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      {process && (
        <div id="cover" style={imageStyle} className="relative min-h-96">
          <Arrow left="true" change={() => changeCover.prevCover()} />
            <div className="flex absolute bottom-1/6 left-1/12 gap-8">
              <Button
                variant="contained"
                size="large"
                startIcon={<PlayArrowOutlinedIcon />}
                color="error"
              >
                Watch
              </Button>
              <Button
                variant="contained"
                size="large"
                startIcon={<ConfirmationNumberIcon />}
                sx={{color : 'var(--color-neutral-800)',backgroundColor:'var(--color-amber-400)'}}
              >
                Ticket
              </Button>
            </div>
          <Arrow right="true" change={() => changeCover.nextCover()} />
        </div>
      )}
    </>
  );
}
