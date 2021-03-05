import React , {useState,useEffect} from "react";
import "./index.css";
import App from "./App";
import { lightTheme, darkTheme } from './Theme'
import { render } from 'react-dom'

import { ThemeProvider } from 'styled-components'

const Theme = () => {
    const [theme, setTheme] = useState("light")
  
    const toggleTheme = () => theme === "light" ? setTheme('dark') : setTheme('light')
  
    useEffect(() => {
      if (theme === "dark") {
        document.body.style.backgroundColor = darkTheme.backgroundColor
      } else {
        document.body.style.backgroundColor = lightTheme.backgroundColor
      }
    }, [theme])
    
    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <button onClick={toggleTheme}>{theme === "light" ? '☀️' : '🌙'}</button>
        <App />
      </ThemeProvider>
    )
  }


  render(
    <Theme />,
    document.querySelector('#root')
  )
  
