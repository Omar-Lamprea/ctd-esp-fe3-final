import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {id} = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/' + id

  // const {state} = useContextGlobal()
  // const dentist = state.data.find(d => d.id === parseInt(id))
  
  const [dentist, setDentists] = useState()
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setDentists(data))
  }, [url])

  return (
    <>
      {dentist
        ? 
          <div className="card detail">
            <img src="../images/doctor.jpg" alt="" />
            <h3>{dentist?.name}</h3>
            <p>{dentist?.email}</p>
            <p>{dentist?.phone}</p>
            <p>{dentist?.username}</p>
            <p>{dentist?.website}</p>
          </div>
        : "cargando"
      }
    </>
  )
}

export default Detail