import React, {useEffect, useState} from 'react'
import Login from "./components/Login"
function App() {
  const [backendData, setBackendData] = useState([{}]);

  // useEffect(()=>{
  //   fetch("/users").then(
  //     response => response.json()
  //   ).then(
  //     data=>{
  //       setBackendData(data)
  //     }
  //   )
  // }, []);

  return (
    // <div>
    //   {(typeof backendData.users === 'undefined') ? (
    //     <p>Loading...</p>
    //   ): (backendData.users.map((user, i)=>(<p>{user}</p>)))}
    // </div>
    <Login />
  )
}

export default App