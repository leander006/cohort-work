

import './App.css'
import {useNavigate} from "react-router-dom"
import {Routes, Route } from 'react-router-dom';

// Normal loading
// import Home from './Component/Home';
// import DashBoard from './Component/DashBoard';
import { lazy,Suspense } from 'react';
import { useState } from 'react';
import { countAtom, evenSelector } from './store/atoms/Count';
import {useRecoilState,useSetRecoilState,useRecoilValue,RecoilRoot} from "recoil"
import { filterAtom, filterSelector, todoAtom } from './store/atoms/Todos';
// Lazy loading for more optimize website
const Home = lazy(() => import("./Component/Home"))
const DashBoard = lazy(() => import("./Component/DashBoard"))



function App() {
  return (
   <>
   <RecoilRoot>

    {/* 
      Count recoil concept
      <Count />
    */}
    <Todo/>
    <Filter/>
    <Show/>   
   </RecoilRoot>
   </>
  )
}

export default App

function Filter() {
  const setValue = useSetRecoilState(filterAtom)
  const value = useRecoilValue(filterSelector)
  return(
    <div style={{margin:"12px"}}>
      <input onChange={(e) =>setValue(e.target.value) } type="text" placeholder='Search for text' />
      <div style={{color:"blue"}}>
      {
        value.map((v) =>(
          <div>
            <div>{v.title}</div>
            <div>{v.desc}</div>
          </div>
        ))
      }
    </div>
    </div>
  )
}

function Todo() {
  const [value,setValue] = useRecoilState(todoAtom)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  return(
    <div style={{display:"flex",flexDirection: "column",padding:"12px"}}>
      <div style={{marginBottom:"12px"}}>      
        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Enter title '/>
      </div>
      <div style={{marginBottom:"12px"}}>    
         <input onChange={(e) => setDesc(e.target.value)} type="text" placeholder='Enter description'/>
      </div>
      <div style={{marginBottom:"12px"}}>      
        <button onClick={() => {
          setValue([...value,{title,desc}])
          setTitle("")
          setDesc("")
        }} type="submit">Submit</button>
      </div>
    </div>
  )
}

function Show() {
  const value = useRecoilValue(todoAtom)
  return(
    <div>
      {
        value.map((v) =>(
          <div>
            <div>{v.title}</div>
            <div>{v.desc}</div>
          </div>
        ))
      }
    </div>
  )
}

function Count() {
  return(
    <>
        <CountRender/>
        <Buttons/>
        <Display/>
    </>

)}

function Buttons() {
  const setCount = useSetRecoilState(countAtom)
  return(
  <>
      <button onClick={() => setCount(c => c+1)}>Increment</button>
      <button onClick={() => setCount(c => c-1)}>Decrement</button>
  </>
)}

function CountRender() {
  const count = useRecoilValue(countAtom)
  return(
    <div>
      Count is {count}
    </div>
)}

function Display() {
  const even = useRecoilValue(evenSelector)
  console.log(even);
  return(
    <div>{even == 0 && "It is even"}</div>
  )
}
// function TopBar() {
//   const navigate = useNavigate()
//   return(
//     <div>
//       <button onClick={() => navigate("/")}>Home</button>
//       <button onClick={() => navigate("/dashBoard")}>DashBoard</button>
//     </div>
//   )
// }

    /*
    Routing using lazy routing
      <>
    <TopBar/>
    <Routes>
      Adding suspense for asynchronous api calling for lazy loading
     <Route path="/" element={<Suspense fallback={"...loading"}><Home/></Suspense>} />
     <Route path="/dashBoard" element={<Suspense fallback={"...loading"}><DashBoard/></Suspense>} />
   </Routes>

   </>
    */
