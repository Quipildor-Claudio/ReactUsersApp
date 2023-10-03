import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/layaout/Navbar'
import { UsersPage } from '../pages/UsersPage'
import { RegisterPage } from '../auth/pages/RegisterPage'
import { UserProvider } from '../context/UserProvider'
import { AuthContext } from '../auth/context/AuthContext'

export const UserRoutes = () => {
    const { login } = useContext(AuthContext);


    return (
        <>
            <UserProvider>
                <Navbar />

                <Routes>
                    <Route path='users' element={<UsersPage />} />
                    {!login.isAdmin || <>
                        <Route path='users/register' element={<RegisterPage />} />
                        <Route path="users/edit/:id" element={<RegisterPage />} />
                    </>}
                    <Route path='/' element={<Navigate to='/users' />} />
                </Routes>
            </UserProvider>
        </>
    )
}
