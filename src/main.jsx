import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './Pages/Home.jsx';
import ProductPage from './Pages/ProductPage.jsx';
import Hato from './Pages/Hato.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <ProductPage />
      },
      {
        path: "*",
        element: <Hato/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
