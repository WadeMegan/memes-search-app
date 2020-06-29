import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import SearchPage from '../SearchPage/SearchPage'
import MemePage from '../MemePage/MemePage.js'

class App extends Component {

  render(){
    return(
      <>
      <nav>
        <h1>memes-search-app</h1>
      </nav>
      <main className='App'>
        <Switch>
          <Route exact path={'/'} component={SearchPage}/>
          <Route path={'/memes/:id'} render={(props)=> <MemePage {...props}/>}/>
        </Switch>
      </main>
      </>
    )
  }
}

export default App