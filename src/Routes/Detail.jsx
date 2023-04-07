import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
    <section className='card-container'>
      {dentist
        ? 
          <div className="card detail">
            <img src="../images/doctor.jpg" alt="" />
            <div className="details">
              <h3>{dentist?.name}</h3>
              <p><strong>Email:</strong> {dentist?.email}</p>
              <p><strong>Phone:</strong> {dentist?.phone}</p>
              <p><strong>Username:</strong> {dentist?.username}</p>
              <p><strong>Website:</strong> https://{dentist?.website}</p>
            </div>
          </div>
        : "cargando"
      }
    </section>
  )
}

export default Detail