import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className=" p-5 flex border-b-2 border-green-500 justify-between mb-5">
      <div>
        <Link
          className="font-bold font-get-schwifty text-3xl text-green-500"
          to="/"
        >
          Rick and Morty
        </Link>
      </div>
      <div className="flex">
        <div className="text-white gap-x-5 flex justify-center items-center">
          <NavLink
            to="/characters"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 text-lg font-semibold border-b-2 border-green-500"
                : "px-4 py-2 text-lg font-semibold hover:border-b-2 hover:border-green-500"
            }
          >
            Characters
          </NavLink>
          <NavLink
            to="/episodes"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 text-lg font-semibold border-b-2 border-green-500"
                : "px-4 py-2 text-lg font-semibold hover:border-b-2 hover:border-green-500"
            }
          >
            Episodes
          </NavLink>
          <NavLink
            to="/locations"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 text-lg font-semibold border-b-2 border-green-500"
                : "px-4 py-2 text-lg font-semibold hover:border-b-2 hover:border-green-500"
            }
          >
            Locations
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 text-lg font-semibold border-b-2 border-green-500"
                : "px-4 py-2 text-lg font-semibold hover:border-b-2 hover:border-green-500"
            }
          >Favorites</NavLink>
          <h2 className="font-get-schwifty text-green-500 text-xl">
            {user?.name}
          </h2>
          <button
            onClick={onLogout}
            className="px-4 py-2 text-lg font-semibold border rounded-lg border-green-500 hover:bg-green-500 hover:border-green-500 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
