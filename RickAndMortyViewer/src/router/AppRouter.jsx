import { Route, Routes } from "react-router-dom";
import { MixRouter } from "./MixRouter";
import { LoginPage } from "../pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<MixRouter />} />
      </Routes>
    </>
  );
};
