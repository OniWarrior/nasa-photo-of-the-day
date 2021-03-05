import React from 'react'
import styled from 'styled-components'

import {Container} from './Styled/Container'


// Component for APOD
 const  APOD = (props) =>{
    const {photo} = props;
    

    return(
      <PhotoContainer>      
        <h3>{photo.title}</h3>
        <p>{photo.copyright}</p>
        <p>{photo.date}</p>
        <p>{photo.explanation}</p>
        <img src = {photo.url} alt ='nasa'/>
    </PhotoContainer>

    )   
  }

  const PhotoContainer = styled(Container)`
  border: 1px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: 8px;
  margin: 16px;
  padding: 16px 8px 12px 16px;

`

  export default APOD