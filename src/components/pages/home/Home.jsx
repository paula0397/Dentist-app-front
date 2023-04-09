import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import "./Home.css";


const Home = () => {
  const { state } = useContext(GlobalContext);

  return (

    <div className={state.isDarkMode ? "container-dark" : "container-light"}>
      <h1>Este es el home</h1>
      <Link to="dentistas">Ver profesionales</Link>
    </div>
  );
};

export default Home;