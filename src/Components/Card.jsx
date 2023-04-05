import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({dentists}) => {
  const {name, username, id} = dentists
  const {state, dispatch} = useContextGlobal()
  console.log(state.data);

  const storageFavs = localStorage.getItem('favs')
  const favs = JSON.parse(storageFavs)
  const isfav = favs.find(fav => fav.id === id)

  const addFav = ()=>{
    dispatch({type: "addFav", payload: dentists})
    // const storageFavs = localStorage.getItem('favs')
    // if(!storageFavs){
    //   localStorage.setItem('favs', JSON.stringify([dentists]))
    // }else{
    //   const favs = JSON.parse(storageFavs)
    //   const isfav = favs.find(fav => fav.id === id)
      
    //   if(!isfav){
    //     favs.push(dentists)
    //     localStorage.setItem('favs', JSON.stringify(favs))
    //   }else{
    //     console.error('dentist already exist')
    //   }
    // }
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
        {!isfav 
          ? <button onClick={addFav} className="favButton">Add fav ⭐️</button>
          : <button onClick={addFav} className="favButton" disabled>Add fav ⭐️</button>
        }
        
    </div>
  );
};

export default Card;
