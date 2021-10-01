import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getGhibliFilms } from '../api'

function FilmList () {
  const [ghibliFilms, setGhibliFilms] = useState([])

  useEffect(() => {
    getGhibliFilms()
      .then(films => setGhibliFilms(films))
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <div className="filmlist">
      <h3><Link to="/">Return</Link></h3>
      <div>A list of all Ghibli films:</div>
      <ul>
        {ghibliFilms.map(film => (
          <>
            <li key={film.id}><Link to={`/films/${film.id}`}>{film.title}</Link></li>
          </>
        ))}
      </ul>
    </div>
  )
}

export default FilmList
