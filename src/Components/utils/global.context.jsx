import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  theme: localStorage.getItem('theme') || "light",
  data: [],
  favs: JSON.parse(localStorage.getItem('favs')) || []
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
        localStorage.setItem('favs', JSON.stringify([...state.favs, action.payload]))
        return {...state, favs: [...state.favs, action.payload]}
      default:
          throw new Error('action type error')
  }
}



const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState)
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


  useEffect(() =>{
    const favsStorage = localStorage.getItem('favs') || "[]"
    localStorage.setItem('favs',favsStorage)
    getList()
  },[])
  
  
  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)