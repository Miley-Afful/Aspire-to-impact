// import { useState } from 'react'
// import './App.css'
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AboutSection from './components/AboutUs';
// import Home from './components';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutSection />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/components';
import BlogPost from './components/components/pages/BlogDetails';
import GallerySection from './components/components/Gallery';
import EventSection from './components/components/Events';
import ContactSection from './components/components/Contact';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home />
    },
    {
      path: "/blog-post",
      element:<BlogPost />
    },
    {
      path: "/gallery",
      element:<GallerySection />
    },
    {
      path: "/events",
      element:<EventSection />
    },
    {
      path: "/contact",
      element:<ContactSection />
    },
  
  ]);
 

  return <RouterProvider router={router} />
  
}

export default App

