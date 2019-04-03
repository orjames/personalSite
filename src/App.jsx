import React, { Component } from 'react';
import Home from './Home'
import './App.css';
import Procedures from './Procedures'
import Contact from './Contact'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ProcedureShow from './ProcedureShow'

class App extends Component {
  render() {
    const procedures = [
      {id: 1, 
        name: 'Deep Clean'},
      {id: 2, 
        name: 'Filling'},
      {id: 3, 
        name: 'Crown'},
      {id: 4, 
        name: 'Whitening'},
      {id: 5, 
        name: 'Root Canal'},
      {id: 6, 
        name: 'Brush'},
      {id: 7, 
        name: 'Floss'},
    ]
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/'>Home</Link> |{' '}
            <Link to='/procedures'>Procedures</Link> |{' '}
            <Link to='/contact'>Contact</Link>
          </nav>
          <Route path='/' exact component={Home} />
          <Route path='/procedures' exact render={() => <Procedures procedures={procedures} />} />
          <Route path='/contact' component={Contact} />
          <Route path='/procedures/:id' render={(props) => <ProcedureShow procedures={procedures} {...props} />}/> 
        </div>
      </Router>
    );
  }
}

export default App;
