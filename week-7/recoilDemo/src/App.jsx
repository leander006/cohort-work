
import {useRecoilStateLoadable, useRecoilValue} from "recoil"
import './App.css'
import {networkAtom,jobsAtom,notificationsAtom ,messagingAtom,sumCount} from './store/atom.js'
import {notificationAtomCount} from "./store/notification.js"
import { notificationFamily, notificationFamilySelector } from "./store/notificationFamily"
function App() {

  /* 
          const networkCount = useRecoilValue(networkAtom)
          const jobCount = useRecoilValue(jobsAtom)
          const notiCount = useRecoilValue(notificationsAtom)
          const messageCount = useRecoilValue(messagingAtom)
          const totalCount = useRecoilValue(sumCount)
  */

          // const value = useRecoilValue(notificationAtomCount)
          // console.log(value);

          /* 

                  <button>Home</button>
                  <button>My Network {value.network>100?"99+":value.network}</button>
                  <button>Jobs {value.jobs}</button>
                  <button>Notifications {value.notifications}</button>
                  <button>Message {value.messaging}</button>
                  <button>Mee {totalCount }</button> 
          
          */
  return (

    <>
    <Todo id={1}/>
    <Todo id={1}/>

    <Todo id={2}/>

    </>
  )
}

export default App

function Todo({id}) {
  const [todo,setTodo] = useRecoilStateLoadable(notificationFamilySelector(id))
  if(todo.state === "loading"){
    return(
      <div>Loading....</div>
    )
  }
  else if(todo.state === "hasValue"){
    return(
      <div>
        <h1>{todo.contents.title}</h1>
        <p>{todo.contents.description}</p>
      </div>
    )
  }

}