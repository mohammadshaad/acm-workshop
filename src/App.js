import React, { useState } from 'react';
import preloader from './assets/preloader.gif'
import './App.css';
import Main from './components/Main'
import Students from '../src/components/Main/Students'
import Faculties from './components/Main/Faculties'
import ErrorPage from './components/404'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 6000);


  return (
    <>
      <div className="min-h-screen flex flex-col justify-center w-screen">

        <div className="">
          {loading ? (
            <div className="flex items-center justify-center bg-white w-full h-screen">
              <img className="" src={preloader} alt="Loading..." />
            </div>
          ) : (
            <div>
              <BrowserRouter>
                <Routes>
                  <Route index element={<Main />} />
                  <Route path="/achievements" element={<Students />} />
                  <Route path="/faculties" element={<Faculties />} />
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </BrowserRouter>


            </div>
          )}
        </div>


      </div>



    </>
  );
}

export default App;
