import { useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { CardCharacter } from "../index";
import GET_LOCATIONS_BY_ID from "../../graphql/locations/getLocationsById.graphql";

export const LocationInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);
  };
  const { data, loading, error } = useQuery(GET_LOCATIONS_BY_ID(id));
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
              {data.location.name}
            </Typography>
            <Typography color="whitesmoke" variant="h2">
              ({data.location.type})
            </Typography>
          </div>
          <Typography color="whitesmoke" variant="h4">
            {data.location.dimension}
          </Typography>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Typography color="#22c55e" variant="h5">
            - Residents -
          </Typography>
          <div className="grid grid-cols-5 justify-center items-center gap-x-5 gap-y-4">
            {data.location.residents.map((resident) => {
              return (
                <div
                  className="flex flex-col justify-center items-center"
                  key={resident.id}
                >
                  <CardCharacter
                    id={resident.id}
                    name={resident.name}
                    image={resident.image}
                    status={resident.status}
                    specie={resident.species}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
