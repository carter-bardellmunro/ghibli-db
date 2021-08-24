import request from 'superagent'

// const serverURL = 'http://localhost:3000/api/v1'

export function getGhibliFilms () {
  return request('https://ghibliapi.herokuapp.com/films/')
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error('Error:', err)
    })
}

export function getGhibliPeople () {
  return request('https://ghibliapi.herokuapp.com/people/')
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error('Error:', err)
    })
}

export function getGhibliLocations () {
  return request('https://ghibliapi.herokuapp.com/locations/')
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error('Error:', err)
    })
}

export function getGhibliSpecies () {
  return request('https://ghibliapi.herokuapp.com/species/')
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error('Error:', err)
    })
}
