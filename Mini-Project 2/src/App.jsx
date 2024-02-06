import { useState } from 'react'
import './App.css'
import CustomCard from './pages (examples)/CustomCard'
import BasicGrid from './pages (examples)/BasicGrid'
import OutlinedCard from './pages (examples)/OutlinedCard'
import MUIForm from './pages (examples)/MUI Form'
import { ThemeProvider } from "@mui/material/styles";
import { tealTheme } from './pages (examples)/tealTheme'
import Homepage from './pages/LandingPage'
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
