import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer, Zoom } from 'react-toastify'
import Student from './Student.jsx'
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Student/>} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </>
  )
}

export default App

