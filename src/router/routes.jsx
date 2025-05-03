import { Routes, Route, Navigate } from 'react-router'
//Pages:
import { Register } from '../pages/Register/Register'
import { Login } from '../pages/Login/Login'

const AppRoutes = () => {
    return (
        <Routes>
            
            <Route 
                path="/register" 
                element={<Register />}
            />

            <Route path="/login"
                element={<Login />}
            />

            <Route path="*" element={<Navigate to="/register" />} />
        </Routes>
    )
}

export default AppRoutes
