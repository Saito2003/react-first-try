import { useState } from 'react'
import './App.css'



function App() {
const [count, setCount] =useState(0);

function handleClick(){
  setCount(count + 1)
}

  return(
    <div className="container">
      <button onClick={handleClick}> count  {count}</button>
    </div>
  );
}

export default App
