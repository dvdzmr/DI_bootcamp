// App.js
import React from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function WebsiteBody() {
  const { theme } = useTheme();
  const themeStyles = {
    light: {
      backgroundColor: "white",
      color: "black",
    },
    dark: {
      backgroundColor: "black",
      color: "lightgray",
    },
  };
  return (
    <div style={themeStyles[theme]} className="conte">
      <h1>Dark/Light theme example</h1>
      <p>Click the button above to switch between light and dark</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
        <WebsiteBody />
      </div>
    </ThemeProvider>
  );
}

export default App;