// import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout';

// import delle pegine 
import HomePage from "./pages/HomePage";
import UserPostsPage from "./pages/UserPostsPage";
import ReservedArea from "./pages/ReservedArea";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* QUA INSERISCO IL LAYOUT DEFINITIVO */}
          <Route element={<DefaultLayout />} >

            {/*   QUA INVECE CI SARANNO LE ALTRE PAGINE DEL MAIN */}
            <Route path="/" element={<HomePage />} />
            <Route path="posts" element={<UserPostsPage />} />
            <Route path="reserved-area" element={<ReservedArea />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
