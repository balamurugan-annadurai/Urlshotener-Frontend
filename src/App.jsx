import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home';
import "./App.css"

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App