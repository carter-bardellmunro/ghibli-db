import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import FilmList from './FilmList'

const App = () => (
  <div className='app-container'>
    <Route exact path="/" component={Home}/>
    <Route exact path="/films" component={FilmList}/>
  </div>
)

export default App
