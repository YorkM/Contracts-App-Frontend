import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../auth/';
import { MainInfo } from '../components/MainInfo';

export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="login" element={ <LoginPage /> } />
                <Route path="register" element={ <RegisterPage /> } />
                <Route path='contracts' element={ <MainInfo /> } />

                <Route path='/*' element={ <Navigate to="contracts" /> } />

            </Routes>
        </>
    )
}
