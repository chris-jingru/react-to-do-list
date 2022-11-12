import "./App.css";

function App() {
  /* pseudo code 
  1. set up variables to capture the elements of input and button.
  2. function event listener to the button prevent default, grab the the user input value from input variable
  3. create ul and li and append user value 
  4. li items will have a checker box
  5. checker box is clicked, the item will be striked out.
  */

  return (
    <>
      <h1>To Do List</h1>
      <form action="">
        <label htmlFor="item">Please add to do items</label>
        <input type="text" id="item" />
      </form>
      <button>confirm</button>
      <ul></ul>
    </>
  );
}

export default App;
