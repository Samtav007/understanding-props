import React from 'react';
import './App.css';
import elephant from "./images/elephant.jpeg";



function App(props) {
  const imgData = props.Data;

  return (
    <div className="App">
      <h1>Kalvium gallary</h1>
      <div className="row">
        {imgData.map((image) =>{
          return (
            <div  key={image.id}>
            <img src={image.img} alt="" />
          </div>
          );
          })};

        </div>
      </div>
    );
          }

      


export default App;
