import { useState } from 'react'
import './App.css'
import NavBar from './pages/NavBar'
import AppRoutes from './Routes/AppRoutes'
import MyThemeProvider from './context/ThemeContext (Navbar)'
import { UserProvider } from './context/UserContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserProvider>
    <MyThemeProvider>
    <NavBar />
    <AppRoutes/>
    </MyThemeProvider>
    </UserProvider>
    </>
  )
}

export default App
