import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { PaginationCH, CardGeneralInfo, FavButton } from "../components";
import { useSearchParams } from "react-router-dom";
import GET_LOCATIONS from "../graphql/locations/getLocations.graphql";
import "../assets/css/loading.css";

export const Locations = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")));
  const { data, error, loading } = useQuery(GET_LOCATIONS(page));
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
          maxPages={data.locations.info.pages}
          page={page}
          setPage={setPage}
        />
      </div>
      <div className="grid grid-cols-4 justify-center items-center gap-x-5 gap-y-4 pb-2">
        {data.locations.results.map((location) => {
          return (
            <div
              className="flex flex-col justify-center items-center"
              key={location.id}
            >
              {
                <div className="relative">
                  <CardGeneralInfo
                    id={location.id}
                    name={location.name}
                    info1={location.type}
                    info2={location.dimension}
                    info3="location"
                  />
                  <FavButton />
                </div>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};
