import React, {useEffect, useState} from 'react'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import {CContainer} from "@coreui/react"
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  
  const [backendData, setBackendData] = useState([{}]);

  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data=>{
        setBackendData(data)
      }
    )
  }, []);

  return (
    <div>
      <Navbar />
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ): (
        <div className={"d-flex justify-content-start flex-wrap"}>
        {backendData.users.map((user, i)=>(
          <div className={"px-4 py-3"}>
            <Card title={user}/>
          </div>
        ))}
        </div>
      )}
    </div>
  )
}

export default App