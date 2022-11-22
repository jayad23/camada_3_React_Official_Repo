import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/week_6/class_1/pages/home/Home.container';
import AboutPage from './components/week_6/class_1/pages/about/About.container';
import LoginPage from './components/week_6/class_1/pages/auth/login/Login.container';
import ProtectedRoutes from './components/week_6/class_1/components/protected-routes/ProtectedRoutes';

const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
        <Route element={<ProtectedRoutes isAuthenticated={isAuth} />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter