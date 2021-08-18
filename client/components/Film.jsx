import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getGhibliFilms } from '../api'

function Film () {
  const { id } = useParams()

  const [ghibliFilms, setGhibliFilms] = useState([])

  useEffect(() => {
    getGhibliFilms()
      .then(films => setGhibliFilms(films.find(currentFilm => currentFilm.id === id)))
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  // const film = getGhibliFilms.find(currentFilm => currentFilm.id === id)

  return (
    <>
      <div>
        <p>{ghibliFilms.description}</p>
      </div>
    </>
  )
}

export default Film
