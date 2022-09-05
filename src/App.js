import React, { useEffect } from "react";

import "./App.css";
import Login from "./components/Login";
import Spotify from "./components/Spotify";
import { reducerCases } from "./Utils/Constants";
import { useStateProvider } from "./Utils/StateProvider";
function App() {
  // const [{ token }, dispatch] = useStateProvider();
  //  useEffect(() => {
  //    const hash = window.location.hash;
  //    if (hash) {
  //      const token = hash.substring(1).split("&")[0].split("=")[1];
  //      if (token) {
  //        dispatch({ type: reducerCases.SET_TOKEN, token });
  //      }
  //    }
  //    document.title = "Spotify";
  //  }, [dispatch, token]);
  return <div><Login /></div>;
}

export default App;
