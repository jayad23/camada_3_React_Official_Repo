import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './components/week_6_7/class_2/LayoutNavigation';
import { routes } from './components/week_6_7/class_2/navigation/Routes';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {
            routes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))
          }
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter