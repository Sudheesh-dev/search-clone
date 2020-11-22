import React, { useState } from 'react'
import './App.css';

import Home from './Home'
import SearchPage from './SearchPage'
import { Switch, Route, BrowserRouter } from 'react-router-dom'


function App() {

  let [searchTerm, setSearchTerm] = useState('')
  let [term, setTerm] = useState('')

  const updateTerm = () => {
    if (searchTerm.length > 0 && searchTerm !== term) {
      setTerm(searchTerm)
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/search'>
            <SearchPage changeTerm={updateTerm} term={term} updateSearchTerm={(event) => { setSearchTerm(event.target.value) }} searchTerm={searchTerm}></SearchPage>
          </Route>
          <Route path='/'>
            <Home changeTerm={updateTerm} updateSearchTerm={(event) => { setSearchTerm(event.target.value) }} searchTerm={searchTerm}></Home>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
