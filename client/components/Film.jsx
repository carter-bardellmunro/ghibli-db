import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getGhibliFilms, getGhibliPeople } from '../api'

function Film () {
  const { id } = useParams()

  const [ghibliFilm, setGhibliFilm] = useState([])
  const [ghibliPeople, setGhibliPeople] = useState([])

  useEffect(() => {
    getGhibliFilms()
      .then(films => setGhibliFilm(films.find(currentFilm => currentFilm.id === id)))
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  useEffect(() => {
    getGhibliPeople()
      .then(people => setGhibliPeople(people))
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  const people = ghibliPeople.filter(person => person.films[0] === `https://ghibliapi.herokuapp.com/films/${id}`)

  // console.log(people)

  return (
    <>
      <div>
        <h3><Link to="/films">Return</Link></h3>
        <h1>{ghibliFilm.title}</h1>
        <ul>
          <li>Director: {ghibliFilm.director}</li>
          <li>Producer: {ghibliFilm.producer}</li>
          <li>Release: {ghibliFilm.release_date}</li>
          <li>Length: {ghibliFilm.running_time}</li>
        </ul>
        <p>{ghibliFilm.description}</p>
        <ul>
          {people.map(result => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Film
