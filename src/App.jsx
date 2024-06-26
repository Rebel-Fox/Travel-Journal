import React from "react"
import Card from './components/Card.jsx'
import Header from './components/Header.jsx'
import Data from './Data.jsx'

export default function App() {
  const locationData =Data.map(data =>{
    return <Card 
            key={data.title}
            {...data}
            />
  })
  return (
    <>
      <Header />
      <div className="card-container">
        {locationData}
      </div>
    </>
  )
}