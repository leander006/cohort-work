import { useState } from 'react'



function App() {
  const [todos, setTodos] = useState([{
    id:1,
    title:"Go to gym",
    description:"Go to gym from 4-6",
    completed:true
  },
  {
    id :2,
    title:"Study DSA",
    description:"Study DSA from 9-11",
    completed:false
  }
])

function addTodo() {
  setTodos([...todos,{title:"New todo", description:"New todo description"}])
}
  return (
    <>
    <TodoComponent title={"Hi"} description={"Hi there welcome"}/>
    <button onClick={addTodo}>Add todo</button>
    {
      todos.map((t) =>(
          <TodoComponent title= {t.title} description={t.description} />
      ))
    }
    </>
  )
}


function TodoComponent(props) {
  return <div>
    <h1>{props.title}</h1>
    <p>{props.description}</p>

  </div>
}
export default App
