import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { darkTheme } from './components/Themes'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

//Components
import Main from './pages/Main'
import AboutPage from './pages/AboutPage'
import MySkillsPage from './pages/MySkillsPage'
import Projects from './pages/Projects'
import SoundBar from "./subComponents/SoundBar";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkTheme}>
        <SoundBar />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/skills" element={<MySkillsPage />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>       
      </ThemeProvider>
    </>
    
  );
}

export default App;
