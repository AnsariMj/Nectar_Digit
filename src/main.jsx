import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'
import Layout from './Layout'
import About from './Pages/About/About'
import AddMarketing from './Pages/AddMarketing/AddMarketing'
import Blogs from './Pages/Blogs/Blogs'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Portfolio from './Pages/Portfolio/Portfolio'
import Services from './Pages/Services/Services'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='services' element={<Services />} />
      <Route path='addMarketing' element={<AddMarketing />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='blog' element={<Blogs />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
