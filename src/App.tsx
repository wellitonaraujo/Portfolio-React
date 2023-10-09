import './App.css'
import { GlobalStyle } from './GlobalStyle'
import NavBar from './components/NavBar'
import { ThemeProvider } from './context/ThemeContext'
import { StyledFontAwesomeIcon, VerticalLine } from './pages/Home/styles'
import AppRoutes from './routes/app.routes'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {

  return (
    <ThemeProvider>
      <NavBar />
      <GlobalStyle />
      <AppRoutes />
      <VerticalLine>
        <a href='https://github.com/wellitonaraujo' target="_blank">
          <StyledFontAwesomeIcon icon={faGithub} style={{ marginTop: 400 }} />
        </a>

        <a href='https://www.linkedin.com/in/wellitonaraujo/' target="_blank">
          <StyledFontAwesomeIcon icon={faLinkedin} />
        </a>
      </VerticalLine>
    </ThemeProvider>
  )
}

export default App
