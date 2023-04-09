import React , {useState, useEffect, useContext}from "react";
import DentistCard from "../dentist/DentistCard";



const Favs = () => {
  const [favs, setFavs] = useState([]);


  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem('favs')))
  }, [])

  return (
    <><br />
      <h2 style={{ fontFamily: "Raleway", textAlign: "center" }}>Dentists Favs</h2>
      <div className="card-grid">
        {favs.map((dentist)=><DentistCard nameApi={dentist} key={dentist.id}/>)}
      </div><br />
    </>
  );
};

export default Favs;
