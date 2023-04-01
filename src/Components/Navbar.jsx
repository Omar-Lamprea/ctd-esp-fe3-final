import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useContextGlobal()

  const changeTheme = () =>{
    !localStorage.getItem('theme') && localStorage.setItem('theme', state.theme)
    localStorage.getItem('theme') === 'light'
      ? dispatch({type: localStorage.getItem('theme'), payload: 'dark'})
      : dispatch({type: localStorage.getItem('theme'), payload: 'light'})
  }

  return (
    <nav>
      <Link to='/'>
        <img src="./images/DH.png" alt="" />
      </Link>
      <div className="links">
      <Link to='/'> Home</Link>
      <Link to='/contact'> Contact</Link>
      <Link to='/favs'> Favs</Link>

      <button onClick={changeTheme} className="btn-theme">
        {state.theme === "dark"
          ? "🌞"
          : "🌜"
        }
      </button>
      </div>
    </nav>
  )
}

export default Navbar