import { useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { CardCharacter } from "../index";
import GET_EPISODES_BY_ID from "../../graphql/episodes/getEpisodesById.graphql";

export const EpisodeInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);
  };
  const { data, loading, error } = useQuery(GET_EPISODES_BY_ID(id));
  console.log(data);
  if (loading) return <div className="animation"></div>;
  if (error)
    return (
      <p className="text-2xl text-white uppercase">Error: {error.message}</p>
    );
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-10">
        <div className="flex flex-col justify-center items-center gap-y-5">
          <div className="flex justify-center items-center gap-x-5">
            <button className="bg-[#22c55e] py-1 px-2 rounded-xl text-white font-bold" onClick={onNavigateBack}>
              Back
            </button>
            <Typography color="#22c55e" variant="h2" component="div">
              {data.episode.name}
            </Typography>
            <Typography color="whitesmoke" variant="h2">
              {data.episode.episode}
            </Typography>
          </div>
          <Typography color="whitesmoke" variant="h4">
            {data.episode.air_date}
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Typography color="#22c55e" variant="h5">
            - Characters -
          </Typography>
          <div className="grid grid-cols-5 justify-center items-center gap-x-5 gap-y-4">
            {data.episode.characters.map((character) => {
              return (
                <div
                  className="flex flex-col justify-center items-center"
                  key={character.id}
                >
                  <CardCharacter
                    id={character.id}
                    name={character.name}
                    image={character.image}
                    status={character.status}
                    specie={character.species}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}
