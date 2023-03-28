import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@mui/material";

export const Favorites = () => {

  const [favoriteCharacter, setFavoriteCharacter] = useState([])
  useEffect(() => {
    setFavoriteCharacter(JSON.parse(localStorage.getItem('favoriteCharacters')) || [])
  }, [])

  return (
    <div className="flex flex-col justify-center items-center gap-y-10">
      <div className="flex flex-col justify-center items-center gap-y-5">
        <h2 className="text-4xl text-[#0bc86e] font-get-schwifty font-semibold">
          My Favorites
        </h2>
        <div className="flex items-center justify-center">
          <ButtonGroup
            sx={{
              "	.MuiButtonGroup-grouped": {
                backgroundColor: "white",
                border:"solid 2px #0bc86e",
                color:"#0bc86e",
                fontWeight:"bold"
              },
            }}
            size="large"
            color="success"
            variant="outlined"
            aria-label="outlined button group"
          >
            <Button>Characters</Button>
            <Button>Episodes</Button>
            <Button>Locations</Button>
          </ButtonGroup>
        </div>
      </div>
      <div>
        Test
      </div>
    </div>
  );
};
