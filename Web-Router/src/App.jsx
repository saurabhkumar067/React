import React from 'react'
import Navbar from './components/Nabar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/about",
      element:<><Navbar/><About/></>
    },
    {
      path:"/contact",
      element:<><Navbar/><Contact/></>
    },
    {
      path:"/user/:username",
      element:<><Navbar/><User/></>
    },
  ])
  return (
    <div>
<RouterProvider router={router}/>
    </div>
  )
}

export default App
