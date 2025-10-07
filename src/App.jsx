import React from 'react'
import Weather from './components/Weather'
import weatherVideo from "./assets/weathervid.mp4";

function App() {
  return (
    <div className='container'>
       <video autoPlay loop muted playsInline className="background-video">
        <source src={weatherVideo} type="video/mp4" />
      </video>
      <Weather/>
    </div>
  )
}

export default App