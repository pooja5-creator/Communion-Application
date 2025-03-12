import React from 'react'
import Header from './components/Header'
import "./App.css"
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
export default function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
