import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { CardCharacter, CardGeneralInfo } from "../components";

export const Favorites = () => {
  const [favorites, setFavorites] = useState({
    character: [],
    episode: [],
    location: [],
  });
  const [activeSection, setActiveSection] = useState(null);
  
  function handleShowSection(e, sectionName) {
    e.preventDefault();
    setActiveSection(activeSection === sectionName ? null : sectionName);
  }

  useEffect(() => {
    const storedCharacters =
      JSON.parse(localStorage.getItem("favoriteCharacters")) || [];
    const storedEpisodes =
      JSON.parse(localStorage.getItem("favoriteEpisodes")) || [];
    const storedLocations =
      JSON.parse(localStorage.getItem("favoriteLocations")) || [];
    setFavorites({
      character: storedCharacters,
      episode: storedEpisodes,
      location: storedLocations,
    });
  }, []);

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
                border: "solid 2px #0bc86e",
                color: "#0bc86e",
                fontWeight: "bold",
              },
            }}
            size="large"
            color="success"
            variant="outlined"
            aria-label="outlined button group"
          >
            <Button onClick={(e) => handleShowSection(e, "character")}>
              Characters
            </Button>
            <Button onClick={(e) => handleShowSection(e, "episode")}>
              Episodes
            </Button>
            <Button onClick={(e) => handleShowSection(e, "location")}>
              Locations
            </Button>
          </ButtonGroup>
        </div>
      </div>
      {activeSection === "character" && (
        <div className="grid grid-cols-5 justify-center items-center gap-x-5 gap-y-4">
          {favorites.character.map((fav) => {
            return (
              <div
                className="flex flex-col justify-center items-center"
                key={fav.id}
              >
                <CardCharacter
                  id={fav.id}
                  name={fav.name}
                  image={fav.image}
                  status={fav.status}
                  specie={fav.species}
                />
              </div>
            );
          })}
        </div>
      )}
      {activeSection === "episode" && (
        <div className="grid grid-cols-5 justify-center items-center gap-x-5 gap-y-4">
          {favorites.episode.map((fav) => {
            return (
              <div
                className="flex flex-col justify-center items-center"
                key={fav.id}
              >
                <CardGeneralInfo
                  id={fav.id}
                  name={fav.name}
                  info1={fav.air_date}
                  info2={fav.episode}
                  info3={fav.ruta}
                />
              </div>
            );
          })}
        </div>
      )}
      {activeSection === "location" && (
        <div className="grid grid-cols-5 justify-center items-center gap-x-5 gap-y-4">
          {favorites.location.map((fav) => {
            return (
              <div
                className="flex flex-col justify-center items-center"
                key={fav.id}
              >
                <CardGeneralInfo
                  id={fav.id}
                  name={fav.name}
                  info1={fav.type}
                  info2={fav.dimension}
                  info3={fav.ruta}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
