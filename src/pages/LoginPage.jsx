import imgTest from "../assets/images/portal.png";
import "../assets/css/vortex.css";
import Swal from "sweetalert2";
import { FormControl, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [inputUser, setUser] = useState("");
  const [inputPass, setPass] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user){
      navigate('/home')
    }
  }, [])
  

  const onLogin = () => {
    if (inputUser === "" || inputPass === "") {
      Swal.fire({
        icon: 'error',
        title: 'Hey...',
        text: 'You must fill in the fields',
      })
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Loggin success',
        showConfirmButton: false,
        timer: 1500
      })
      login(inputUser);
      navigate("/", {
        replace: true,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center w-full overflow-y-hidden">
        <img className="vortex h-[90%]" src={imgTest} />
        <form
          onSubmit={handleSubmit}
          className="absolute flex flex-col gap-y-10 border-2 border-green-500 p-10 rounded-md bg-white"
        >
          <h2 className="font-bold font-get-schwifty text-7xl text-green-500">
            Rick and Morty
          </h2>
          <FormControl className="gap-y-6">
            <TextField
              label="User"
              variant="outlined"
              className="w-auto"
              color="success"
              value={inputUser}
              onChange={(event) => setUser(event.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              className="w-auto"
              color="success"
              type="password"
              value={inputPass}
              onChange={(event) => setPass(event.target.value)}
            />
          </FormControl>
          <button
            onClick={onLogin}
            className="bg-green-500 border-2 border-green-700 py-2 rounded-md text-white uppercase font-bold shadow-sm hover:bg-green-400 hover:border-green-500 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};
