import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  theme: localStorage.getItem('theme') || "light",
  data: []
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
      default:
          throw new Error('error de thema')
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
        // setDentists(data);
      }else{
        console.log(res);
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