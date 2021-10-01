import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getGhibliData } from '../api'

function Film () {
  const { id } = useParams()

  const [ghibliFilm, setGhibliFilm] = useState([])
  const [ghibliPeople, setGhibliPeople] = useState([])
  const [ghibliLocations, setGhibliLocations] = useState([])

  useEffect(() => {
    getGhibliData('films')
      .then(films => setGhibliFilm(films.find(currentFilm => currentFilm.id === id)))
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  useEffect(() => {
    getGhibliData('people')
      .then(people => setGhibliPeople(people.filter(person => person.films[0] === `https://ghibliapi.herokuapp.com/films/${id}`)))
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  useEffect(() => {
    getGhibliData('locations')
      .then(locations => setGhibliLocations(locations.filter(location => location.films[0] === `https://ghibliapi.herokuapp.com/films/${id}`)))
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

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
        <h2>Characters: </h2>
        {ghibliPeople.map(result => (
          <>
            <h3 key={result.id}>{result.name}</h3>
            <ul>
              <li>Gender: {result.gender}</li>
              <li>Age: {result.age}</li>
              <li>Eye Colour: {result.eye_color}</li>
              <li>Hair Colour: {result.hair_color}</li>
            </ul>
          </>
        ))}
        <h2>Locations: </h2>
        {ghibliLocations.map(result => (
          <>
            <h3 key={result.id}>{result.name}</h3>
            <ul>
              <li>Climate: {result.climate}</li>
              <li>Terrain: {result.terrain}</li>
            </ul>
          </>
        ))}
      </div>
    </>
  )
}

export default Film
