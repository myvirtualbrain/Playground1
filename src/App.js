import './App.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import Details from './Details';
import DogList from './DogList';


const App = () => {

  return (
    <Router>
      <div>
        <Switch>

          <Route path="/details/:id" render={(props) => <Details {...props} /> }>
          </Route>

          <Route path="/">
            <DogList />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
