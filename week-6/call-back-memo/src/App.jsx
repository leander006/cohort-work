
import { useCallback } from 'react';
import { useState,memo } from 'react'



function App() {
const [count, setCount] = useState(0);

// Without usecallback it rerenders the component

// function input() {
//   console.log("input");
// }

const input = useCallback(()  =>{
  console.log("input");
},[])


  return (
    <>
    <ButtonComponent input={input}/>
    <button onClick={() => setCount(count+1)}>Counter {count}</button>
    </>
  )
}

// Rerender button component without any change
// function ButtonComponent({input}) {
//   console.log("Butotn component");
//   return <div>
//     <button onClick={input}>Button component</button>

//   </div>
// }

// Still calling for rerender now use callback for input function
const ButtonComponent= memo(({input})  =>{
  console.log("Butotn component");
  return <div>
    <button onClick={input}>Button component</button>
  </div>
})

export default App
