import request from 'superagent'

// const serverURL = 'http://localhost:3000/api/v1'

export function getGhibliData (type) {
  return request(`https://ghibliapi.herokuapp.com/${type}/`)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error('Error:', err)
    })
}
