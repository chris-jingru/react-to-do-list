import "./App.css";
import { useState } from "react";

function App() {
  /* pseudo code 
  1. set up variables to capture the elements of input and button.
  2. function event listener to the button prevent default, grab the the user input value from input variable
  3. create ul and li and append user value 
  4. li items will have a checker box
  5. checker box is clicked, the item will be striked out.
  */

  const [parks, setParks] = useState([]);
  const [displayParks, setDisplayParks] = useState([]);

  //! Adding Parks
  const inputHandler = (event) => {
    setParks(event.target.value);
  };
  const parkObj = { parkName: parks, id: Math.random().toString() };

  const addPark = (e) => {
    e.preventDefault();

    function newPark(newP) {
      setDisplayParks((prevArr) => {
        return [...prevArr, newP];
      });
    }
    newPark(parkObj);

    setParks([]);
  };
  let newV = <h3>i am nothing</h3>;

  function removePark(target) {
    const newArr = displayParks.filter((park) => park.id != target.id);
    setDisplayParks(newArr);
  }

  if (displayParks.length > 0) {
    newV = displayParks.map((displayPark, index) => {
      return (
        <div key={index} onClick={() => removePark(displayPark)}>
          <li>{displayPark.parkName}</li>
        </div>
      );
    });
  }

  //! Removing Parks
  return (
    <>
      <h1>Park Lists</h1>
      <form onSubmit={addPark}>
        <input type="text" onChange={inputHandler} value={parks} />
        <button>Add Park</button>
      </form>
      <ul>{newV}</ul>
    </>
  );
}

export default App;
