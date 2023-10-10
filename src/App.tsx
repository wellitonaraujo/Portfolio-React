
import './App.css'
import Global from './Global'
import NavBar from './components/NavBar'
import Vertical from './components/VerticalLine'
import { ThemeProvider } from './context/ThemeContext'
import AppRoutes from './routes/app.routes'


function App() {

  return (
    <ThemeProvider>
      <NavBar />
      <Global />
      <AppRoutes />
      <Vertical />
    </ThemeProvider>
  )
}

export default App
