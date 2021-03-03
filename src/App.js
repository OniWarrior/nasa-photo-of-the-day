import React, { useState, useEffect } from 'react'
import axios from 'axios'

import "./App.css";
import APOD from './APOD'

// Effect for NASA data
const App = () =>  {
  const [data,setData] = useState([]);
  
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
    .then(({data}) => {
      console.log(data)
      setData(data)
    })
    .catch(error => console.log(error))
  }, [])

  


  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <h2>
        NASA PHOTO OF THE DAY
      </h2>
      <APOD photo={data}/>
    </div>
  );
}

export default App;
