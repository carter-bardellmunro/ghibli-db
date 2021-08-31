import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Header from './Header'
import FilmList from './FilmList'
import Film from './Film'

const App = () => (
  <div className='app-container'>
    <Route path="/" component={Nav}/>
    <Route exact path="/" component={Header}/>
    <Route exact path="/films" component={FilmList}/>
    <Route exact path="/films/:id" component={Film}/>
  </div>
)

export default App
