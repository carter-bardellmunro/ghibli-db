import React, { useState, useEffect } from 'react'

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

  console.log(ghibliFilms)

  return (
    <>
      <div>A list of all Ghibli films:</div>
      {ghibliFilms.map(film => (
        <>
          <h2 key={film.id}>{film.title}</h2>
        </>
      ))}
    </>
  )
}

export default FilmList
