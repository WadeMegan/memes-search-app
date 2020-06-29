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
      <footer>
        <p>Created by <a href="https://portfolio.wademegan.now.sh/">Megan Wade</a></p>
        <ul>
          <li><a href="https://www.linkedin.com/in/megan-wade-909129124/" target="_blank" rel="noopener noreferrer" aria-label="linkedin link"><i className="fab fa-linkedin fa-2x"></i></a></li>
          <li><a href="mailto:meganwade96@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="email link"><i className="fas fa-envelope-square fa-2x"></i></a></li>
          <li><a href="https://github.com/WadeMegan" target="_blank" rel="noopener noreferrer" aria-label="github link"><i className="fab fa-github-square fa-2x"></i></a></li>
        </ul>
      </footer>
      </>
    )
  }
}

export default App