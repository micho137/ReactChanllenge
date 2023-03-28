import { useQuery } from "@apollo/client";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GET_CHARACTERS_BY_ID from "../../graphql/characters/getCharactersById.graphql";

export const CharacterInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const onNavigateBack = () => {
    navigate(-1);
  };
  const { data, loading, error } = useQuery(GET_CHARACTERS_BY_ID(id));
  if (loading) return <div className="animation"></div>;
  if (error)
    return (
      <p className="text-2xl text-white uppercase">Error: {error.message}</p>
    );
  const checkData = data.character.type === "";
  return (
    <>
      <div className="flex justify-center items-center pb-5 gap-x-10 h-[calc(100vh-108px)] w-full">
        <div className="flex h-[50%] w-96">
          <img src={data.character.image} />
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-green-500 px-10 h-[50%]">
          <div className="mb-5">
            <h5 className="text-center text-white text-xl font-bold hover:font-get-schwifty">
              {data.character.name}
            </h5>
          </div>
          <div className="flex flex-col justify-center items-center">
            <ul className="flex flex-col justify-center gap-y-2 text-xl text-white">
              <li>
                <span className="text-green-500">Status:</span>{" "}
                {data.character.status}
              </li>
              <li>
                <span className="text-green-500">Specie:</span>{" "}
                {data.character.species}
              </li>
              <li>
                <span className="text-green-500">Gender:</span>{" "}
                {data.character.gender}
              </li>
              {checkData ? null : (
                <li ref={inputRef}>
                  <span className="text-green-500">Type:</span>{" "}
                  {data.character.type}
                </li>
              )}

              <ul className="flex gap-x-2">
                <span className="text-green-500">Origin:</span>
                <li>{data.character.origin.name}</li>
              </ul>
              <ul className="flex gap-x-2">
                <span className="text-green-500">Location:</span>
                <li>{data.character.location.name}</li>
                <span className="text-green-500">-</span>
                <li>{data.character.location.type}</li>
              </ul>
            </ul>
            <button className="bg-[#22c55e] py-1 px-2 rounded-xl text-white font-bold mt-5" onClick={onNavigateBack}>
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
