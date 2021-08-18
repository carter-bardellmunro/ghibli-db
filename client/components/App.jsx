import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import FilmList from './FilmList'
import Film from './Film'

const App = () => (
  <div className='app-container'>
    <Route exact path="/" component={Home}/>
    <Route exact path="/films" component={FilmList}/>
    <Route exact path="/films/:id" component={Film}/>
  </div>
)

export default App
