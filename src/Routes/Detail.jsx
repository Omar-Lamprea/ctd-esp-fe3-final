import React from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {id} = useParams()
  const {state} = useContextGlobal()

  const dentist = state.data.find(d => d.id === parseInt(id))
  console.log(dentist);
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