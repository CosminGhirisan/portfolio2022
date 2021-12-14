import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { darkTheme, lightTheme } from './components/Themes'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Main from './pages/Main'
import AboutPage from './pages/AboutPage'
import MySkillsPage from './pages/MySkillsPage'
import Projects from './pages/Projects'

function App() {


  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<AboutPage />} />
          <Route exact path="/skills" element={<MySkillsPage />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </ThemeProvider>
    
    </Router>
    
  );
}

export default App;
