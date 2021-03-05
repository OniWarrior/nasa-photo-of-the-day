import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Container} from './Styled/Container'
import "./App.css";
import APOD from './APOD'
import styled from 'styled-components'


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
    <AppContainer>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <h2>
        NASA PHOTO OF THE DAY
      </h2>
      <APOD photo={data}/>
    </AppContainer>
  );
}

const AppContainer = styled(Container)
`
  border: 1px solid rgb(210, 210, 210);
  boxShadow: 0px 1px 6px -2px rgb(128, 127, 127);
  borderRadius: 8px;
  margin: 16px;
  padding: 16px 8px 12px 16px;
  backgroundColor: white;  
  text-align:center;
`

export default App;
