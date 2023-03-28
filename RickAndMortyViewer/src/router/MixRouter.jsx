import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Characters, Episodes, Locations, Favorites } from "../pages";
import { Navbar, CharacterInfo, LocationInfo, EpisodeInfo } from "../components";

export const MixRouter = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col ">
        <div>
          <Navbar />
        </div>
        <div className="w-full h-full flex justify-center items-center overflow-y-hidden">
          <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="characters" element={<Characters/>}/>
            <Route path="character/:id" element={<CharacterInfo/>}/>
            <Route path="episodes" element={<Episodes/>}/>
            <Route path="episode/:id" element={<EpisodeInfo/>}/>
            <Route path="locations" element={<Locations/>}/>
            <Route path="location/:id" element={<LocationInfo/>}/>
            <Route path="favorites" element={<Favorites/>}/>
            <Route path="/*" element={<Navigate to="/home"/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
};
