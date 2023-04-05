import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  // const {state} = useContextGlobal()
  // console.log(state.favs);
  // const favs = state.favs
  
  const favs = JSON.parse(localStorage.getItem('favs')) || null

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs && favs.map(fav => <Card key={fav.id} dentists={fav}/>)}
      </div>
    </>
  );
};

export default Favs;
