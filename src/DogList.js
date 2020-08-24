import './App.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

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
        (<div className="container">
          {
            dogBreedNames.map(function (image, imageIndex) {
              return <Link style={{marginTop:"10px"}} key={imageIndex} to={location => `/Details/${image}`} >{image}</Link>
            })
          }
        </div>) :
        (<p>Loading..</p>)}
    </div>
  );

}

export default DogList;