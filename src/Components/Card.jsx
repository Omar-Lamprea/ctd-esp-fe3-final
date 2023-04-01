import React from "react";
import { Link } from "react-router-dom";


const Card = ({dentists}) => {
  const {name, username, id} = dentists



  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    console.log('agregando a favoritos: ' + id);
  }


  return (
    <div className="card">
      <Link to={"/detail/" + id}>
        <img src="./images/doctor.jpg" alt="" />
        <h3>{name}</h3>
        <p>{username}</p>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link>
        <button onClick={addFav} className="favButton">Add fav ⭐️</button>
    </div>
  );
};

export default Card;
