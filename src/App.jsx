import { Routes, Route } from 'react-router-dom'

import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'

import HomePage from './pages/HomePage'
// import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div> 
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        {/* <Route path="/contact" Component={ContactPage} /> */}
      </Routes>

      <FooterComponent />
    </div>
  )
}

export default App
