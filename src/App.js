import React, { createContext, useState } from "react";
import MainRouter from "./main_router/MainRouter";


export const ThemeContext = createContext(null)

function App() {


  //Change dark to light here to see the mode changes.
  const [theme, setTheme] = useState('light')

  const toggleTheme= ()=>{
    setTheme((curr)=>(curr==='light' ? "dark" : 'light'))

  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
      <header className="App-header">
        <div>
          <MainRouter />
        </div>
      </header>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
