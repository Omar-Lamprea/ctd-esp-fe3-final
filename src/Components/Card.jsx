import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
import { type } from "@testing-library/user-event/dist/type";


const Card = ({dentists}) => {
  const {name, username, id} = dentists
  const {state, dispatch} = useContextGlobal()
  const favs = state.favs
  const isfav = favs.find(fav => fav.id === id)

  const addFav = ()=>{
    dispatch({type: "addFav", payload: dentists})
  }
  const removeFav = ()=>{
    dispatch({type:"removeFav", payload: dentists})
  }


  return (
    <div className="card">
      <Link to={"/detail/" + id}>
        <img src="/images/doctor.jpg" alt="" />
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
        {!isfav 
          ? <button onClick={addFav} className="favButton">Add fav ⭐️</button>
          : <button onClick={removeFav} className="favButton">Remove fav ❌</button>
        }
        
    </div>
  );
};

export default Card;
