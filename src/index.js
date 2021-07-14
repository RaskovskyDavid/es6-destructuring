// CHALLENGE: uncomment the code below and see the car stats rendered
import { array } from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
const {speedStats:{topSpeed: hondaTopSpeed}} = honda;
const {speedStats:{topSpeed: teslaTopSpeed}} = tesla;
const {coloursByPopularity: [hondaTopColour]} = honda;
const {coloursByPopularity: [teslaTopColour]} = tesla;
// import animals from "./data";

// destructuring array
// const [cat, dog] = animals;
// destructuring object
// const {name, sound, feed:{food, water}} = cat; 

// function useAnimal(animal){
//     return[
//         animal.name,
//         function(){
//             console.log(animal.sound);
//         }
//     ];
// }

// const [animal, makeSound] = useAnimal(cat);
 
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
