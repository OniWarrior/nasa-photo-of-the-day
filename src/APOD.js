import React from 'react'


// Component for APOD
 const  APOD = (props) =>{
    const {photo} = props;
    

    return(
      <div className = "photo-of-the-day">      
      <h3>{photo.title}</h3>
      <p>{photo.copyright}</p>
      <p>{photo.date}</p>
      <p>{photo.explanation}</p>
      <img src = {photo.url} alt ='nasa'/>
    </div>

    )

   
  }

  export default APOD