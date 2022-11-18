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

  const inputHandler = (event) => {
    setParks(event.target.value);
  };

  const addPark = (e) => {
    e.preventDefault();
    setParks([]);
  };

  return (
    <>
      <h1>Park Lists</h1>
      <form onSubmit={addPark}>
        <input type="text" onChange={inputHandler} value={parks} />
        <button>Add Park</button>
      </form>
      <ul>{}</ul>
    </>
  );
}

export default App;
