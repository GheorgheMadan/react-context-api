// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout';

// gestione dati pizze per listato
import { useState, useEffect } from 'react';
import axios from "axios";

// IMPORT DEL GLOBAL CONTEXT 
import GlobalContext from "./contexts/GlobalContext";

// import delle pegine 
import HomePage from "./pages/HomePage";
import UserPostsPage from "./pages/UserPostsPage";
import ReservedArea from "./pages/ReservedArea";


function App() {
  const [posts, setPosts] = useState([])

  function fetchPosts() {
    axios.get('http://localhost:3000/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error('caricamento fallito', err))
  }
  useEffect(fetchPosts, [])
  return (
    <>
      <GlobalContext.Provider value={{ posts }} >
        <BrowserRouter>
          <Routes>
            {/* QUA INSERISCO IL LAYOUT DEFINITIVO */}
            <Route element={<DefaultLayout />} >

              {/*   QUA INVECE CI SARANNO LE ALTRE PAGINE DEL MAIN */}
              <Route index element={<HomePage />} />
              <Route path="posts" element={<UserPostsPage />} />
              <Route path="reserved-area" element={<ReservedArea />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}
export default App
