import './App.css'
import { GlobalStyle } from './GlobalStyle'
import NavBar from './components/NavBar'
import { VerticalLine } from './pages/Home/styles'
import AppRoutes from './routes/app.routes'

function App() {
  return (
    <>
      <NavBar />
      <GlobalStyle />
      <AppRoutes />
      <VerticalLine />
    </>
  )
}

export default App
