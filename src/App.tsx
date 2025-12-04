import { useState } from "react";
import { Header } from "./components/Header";
import "./styles/main.scss";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'app--dark' : ''}`}>
      <Header isDarkMode={isDarkMode} handleThemeMode={toggleTheme}/>
      <main className="main">
        <div className="container">
          <h1 className={`title ${isDarkMode ? 'title--dark' : ''}`}>Test Task: Mobile Header & Text Block</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
