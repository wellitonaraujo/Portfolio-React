import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Skills from '../pages/Skills'
import Projetos from '../pages/Projetos'
import Contato from '../pages/Contato'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/sobre' element={<Projetos />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes