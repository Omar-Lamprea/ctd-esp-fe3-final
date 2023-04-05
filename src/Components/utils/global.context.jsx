import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  theme: localStorage.getItem('theme') || "light",
  data: [],
  favs: JSON.parse(localStorage.getItem('favs')) || []
}

const addFavs = (dentists)=>{
  const storageFavs = localStorage.getItem('favs')
  if(!storageFavs){
    localStorage.setItem('favs', JSON.stringify([dentists]))
  }else{
    const favs = JSON.parse(storageFavs)
    const isfav = favs.find(fav => fav.id === dentists.id)
    
    if(!isfav){
      favs.push(dentists)
      localStorage.setItem('favs', JSON.stringify(favs))
    }else{
      console.error('dentist already exist')
    }
  }
  return storageFavs
}

const ContextGlobal = createContext()

const reducer = (state, action) => {
  switch (action.type){
      case 'light':
        localStorage.setItem('theme', action.payload)
        return {...state, theme: action.payload}
      case 'dark':
        localStorage.setItem('theme', action.payload)
        return  {...state, theme: action.payload}
      case 'data':
        const data = {...state, data: action.payload}
        return  data
      case 'addFav':
        return {...state, favs: JSON.parse(addFavs(action.payload))}
      default:
          throw new Error('action type error')
  }
}



const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const API = 'https://jsonplaceholder.typicode.com/users'

  const getList = async() =>{
    try {
      const res = await fetch(API)
      if(res.ok){
        const data = await res.json()
        dispatch({type: 'data', payload: data})
      }else{
        dispatch({type: 'data', payload: res})
      }
    } catch (error) {
      
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() =>{
    setTimeout(() => {
      getList()
    }, 2000);
  },[])
  
  
  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)