import { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <h1>Kalvium gallary</h1>
        <div className="row">
        {this.props.Data.map((image) => {
          return (
            <div className="column" key={image.id}>
            <img src={image.img} alt="" />
          </div>
        );
        // code here
      })}
        </div>
      </div>
    )
  }
  // code here
}
