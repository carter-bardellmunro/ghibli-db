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
      <div className="films">
        {ghibliFilms.map(film => (
          <>
            <Link to={`/films/${film.id}`} key={film.id} className='film-link'>{film.title}</Link>
          </>
        ))}
      </div>
    </div>
  )
}

export default FilmList
