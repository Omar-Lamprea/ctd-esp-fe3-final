import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'

const Detail = () => {
  const {id} = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/' + id
  const [dentist, setDentists] = useState()
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setDentists(data))
  }, [url])

  return (
    <section className='card-container'>
      <h2>Dentist Details {id}</h2>
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
        : <Loader />
      }
    </section>
  )
}

export default Detail