import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useContextGlobal()
  const favs = state.favs
  
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.length > 0
          ? favs.map(fav => <Card key={fav.id} dentists={fav}/>)
          : <p>You haven't added any favorites yet</p>
        }
      </div>
    </>
  );
};

export default Favs;
