import React, { createContext, useState } from "react";
import MainRouter from "./main_router/MainRouter";


export const ThemeContext = createContext(null);

function App() {
  //Change dark to light here to see the mode changes.
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };


  function Delete() {
   
    };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>

        
          <div>
          <div class="switch_box box_1">
                <input
                  type="checkbox"
                  class="switch_1"
                  onChange={toggleTheme}
                  checked={theme === "light"}
                />
              </div>
         
            <MainRouter />
         
            <div>
              

             
 
            </div>
          </div>
      
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
