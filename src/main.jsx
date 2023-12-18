import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Home, About, Experience, Blog, Projects, Videos, Contact} from './Components/index.js'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/experience",
        element: <Experience />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/videos",
        element: <Videos />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
