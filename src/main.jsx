import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Events from './components/Events.jsx';


const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children:[
      {
       path:'/',
       element:<Home/>
      },
      {
       path:'/about',
       element:<About/>
      },
      {
       path:'/events',
       element:<Events/>
      },
      
    ]
  }
])




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
