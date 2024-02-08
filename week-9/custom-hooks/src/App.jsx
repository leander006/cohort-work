// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function useTodos(n) {
//   const [loading, setLoading] = useState(true);
//   const [todos, setTodos] = useState([])

//   function getData() {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       })
//   }

//   // useEffect(() => {
//   //   setInterval(() => {
//   //     getData();
//   //   }, n * 1000)
//   //   getData();
//   // }, [n])

//   useEffect(() => {
//     function getOn() {

//     }
//     getOn()
//   })      
//   window.addEventListener('online', () => console.log('Became online'));
//   window.addEventListener('offline', () => console.log('Became offline'));

//   return {
//     todos: todos,
//     loading: loading
//   };
// }

// function App() {
//   // const { todos, loading } = useTodos(5);

//   // if (loading) {
//   //   return <div>
//   //     Loading...
//   //   </div>
//   // }

//   return (
//     <>
//       {/* {todos.map(todo => <Track todo={todo} />)} */}
//     </>
//   )
// }

// // function Track({ todo }) {
// //   return <div>
// //     {todo.title}
// //     <br />
// //     {todo.description}
// //   </div>
// // }

// // export default App
// import { useEffect, useState } from 'react'

// function useIsOnline() {
//   const [isOnline, setIsOnline] = useState(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener('online', () => setIsOnline(true));
//     window.addEventListener('offline', () => setIsOnline(false));
    
//   }, [])

//   return isOnline;
// }

// function App() {
//   const isOnline = useIsOnline(5);

//   return (
//     <>
//       {isOnline ? "You are online yay!" : "You are not online"}
//     </>
//   )
// }

// export default App
import { useEffect, useState } from 'react'

const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};

function App() {
  const mousePointer = useMousePointer();

  return (
    <>
      Your mouse position is {mousePointer.x} {mousePointer.y}
    </>
  )
}

export default App