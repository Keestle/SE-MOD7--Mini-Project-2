import AboutMe from "../pages/AboutMe";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/LandingPage";
import Login from "../pages/login";
import Album from "../pages/Projects";
import ProtectedRoute from "../pages/ProtectedRoutes";

function AppRoutes(props) {
    return (
    <Routes>
    {/* index matches on default/home URL: / */}
    <Route index element={<Homepage {...props} />} />
    <Route path='/login' element={<Login {...props} />} />
    <Route path='/aboutme' element={<AboutMe {...props} />} />
    <Route path='/projects' element={<ProtectedRoute><Album {...props} /></ProtectedRoute>} />
    {/* special route to handle if none of the above match */}

    </Routes>
    )
    }
    export default AppRoutes;