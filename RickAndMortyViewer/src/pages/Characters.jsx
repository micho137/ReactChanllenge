import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PaginationCH, CardCharacter, FavButton } from "../components";

import GET_CHARACTERS from "../graphql/characters/getCharacters.graphql";
import "../assets/css/loading.css";

export const Characters = () => {
  const onSaveFavoriteCard = ({ id, name, status, specie, image }) => {
    const favoriteCharacters = JSON.parse(
      localStorage.getItem("favoriteCharacters")
    );
    let newFavoriteCharacter;
    if (favoriteCharacters) {
      newFavoriteCharacter = [
        ...favoriteCharacters,
        { id, name, status, specie, image },
      ];
    } else {
      newFavoriteCharacter = [{ id, name, status, specie, image }];
    }
    localStorage.setItem(
      "favoriteCharacters",
      JSON.stringify(newFavoriteCharacter)
    );
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")));
  const { data, loading, error } = useQuery(GET_CHARACTERS(page));
  useEffect(() => {
    setSearchParams({ page });
  }, [page]);
  if (loading) return <div className="animation"></div>;
  if (error)
    return (
      <p className="text-2xl text-white uppercase">Error: {error.message}</p>
    );
  return (
    <>
      <div className="mx-5 w-full h-full">
        <PaginationCH
          maxPages={data.characters.info.pages}
          page={page}
          setPage={setPage}
        />
        <div className="grid grid-cols-5 justify-center items-center gap-x-5 gap-y-4">
          {
            data.characters.results.map((character) => {
              return (
                <div
                  className="flex flex-col justify-center items-center"
                  key={character.id}
                >
                  {
                    <div className="relative">
                      <CardCharacter
                        id={character.id}
                        name={character.name}
                        image={character.image}
                        status={character.status}
                        specie={character.species}
                      />
                      <FavButton
                        onSave={() =>
                          onSaveFavoriteCard({
                            ...character
                          }
                          )
                        }
                      />
                    </div>
                  }
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
