import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/week_6_7/class_1/pages/home/Home.container';
import ProtectedRoutes from './components/week_6_7/class_1/components/protected-routes/ProtectedRoutes';
import AboutPage from './components/week_6_7/class_1/pages/about/About.container';
import LoginPage from './components/week_6_7/class_1/pages/auth/login/Login.container';
import ErrorPage from './components/week_6_7/class_1/pages/error/Error';
import UserPage from './components/week_6_7/class_1/pages/user/User.container';
import AuthenticationProvider from './components/week_6_7/class_1/context/GhContext';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/users" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/users/user/:login" element={<UserPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthenticationProvider>
    </BrowserRouter>
  )
}

export default AppRouter