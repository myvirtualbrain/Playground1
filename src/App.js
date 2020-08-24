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

const DogList = () => {
  const [dogBreedNames, setDogBreedNames] = useState([]);

  useEffect(() => {

    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response =>
        response.json()
      ).then(res => {
        //console.log(res);
        let breeds = [];
        for (let [key, value] of Object.entries(res.message)) {
          breeds.push(key);
        }
        //spara i state
        setDogBreedNames(breeds);
      });

  }, []);

  return (
    <div>
      {dogBreedNames !== [] ?
        (<div style={{
          flex:1,
          flexDirection:"column",
          justifyContent:"flex-start",
          alignItems:"center",
          backgroundColor:"white"
        }}>
          {
            dogBreedNames.map(function (image, imageIndex) {
              return <Link style={{marginTop:"10px", display:"block"}} key={imageIndex} to={location => `/Details/${image}`} >{image}</Link>
            })
          }
        </div>) :
        (<p>Loading..</p>)}
    </div>
  );

}


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
