import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PaginationCH, CardGeneralInfo, FavButton } from "../components";

import GET_EPISODES from "../graphql/episodes/getEpisodes.graphql";
import "../assets/css/loading.css";

export const Episodes = () => {
  const onSaveFavoriteCard = ({ id, name, air_date, episode }) => {
    const ruta = "episode"
    const favoriteEpisodes = JSON.parse(
      localStorage.getItem("favoriteEpisodes")
    );
    let newFavoriteEpisode;
    if (favoriteEpisodes) {
      newFavoriteEpisode = [
        ...favoriteEpisodes,
        { id, name, air_date, episode, ruta},
      ];
    } else {
      newFavoriteEpisode = [{ id, name, air_date, episode, ruta }];
    }
    localStorage.setItem(
      "favoriteEpisodes",
      JSON.stringify(newFavoriteEpisode)
    );
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")));
  const { data, error, loading } = useQuery(GET_EPISODES(page));
  useEffect(() => {
    setSearchParams({ page });
  }, [page]);
  if (loading) return <div className="animation"></div>;
  if (error)
    return (
      <p className="text-2xl text-white uppercase">Error: {error.message}</p>
    );
  return (
    <div>
      <div>
        <PaginationCH
          maxPages={data.episodes.info.pages}
          page={page}
          setPage={setPage}
        />
      </div>
      <div className="grid grid-cols-4 justify-center items-center gap-x-5 gap-y-4 pb-2">
        {data.episodes.results.map((episode) => {
          return (
            <div
              className="flex flex-col justify-center items-center"
              key={episode.id}
            >
              {
                <div className="relative">
                  <CardGeneralInfo
                    id={episode.id}
                    name={episode.name}
                    info1={episode.air_date}
                    info2={episode.episode}
                    info3="episode"
                  />
                  <FavButton
                    onSave={() =>
                      onSaveFavoriteCard({
                        ...episode,
                      })
                    }
                  />
                </div>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};
