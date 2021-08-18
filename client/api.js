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
