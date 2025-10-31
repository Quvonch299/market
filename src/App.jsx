import React from 'react'
import Header from './home/Header'
import Grid from './home/Grid'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={  <Header/>} />
        <Route path='/grid' element={<Grid/>}  />
      </Routes>
    </div>
  )
}
