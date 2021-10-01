import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getGhibliData } from '../api'

function FilmList () {
  const [ghibliFilms, setGhibliFilms] = useState([])

  useEffect(() => {
    getGhibliData('films')
      .then(films => setGhibliFilms(films))
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <div className="filmlist">
      <h1>Filmography</h1>
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
