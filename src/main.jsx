import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './Pages/Home.jsx';
import ProductPage from './Pages/ProductPage.jsx';
import Hato from './Pages/Hato.jsx';
import Rasprodaja from './Pages/Rasprodaja.jsx';
import Korzina from './Pages/Korzina.jsx';
import Rubej from './Pages/Rubej.jsx';
import Kiyim from './Pages/Kiyim.jsx';
import Uy from './Pages/Uy.jsx';
import Krasota from './Pages/Krasota.jsx';
import Elektronika from './Pages/Elektronika.jsx';
import Katalog from './Pages/Katalog.jsx';
import ElektronikaPage from './Pages/ElektronikaPage.jsx';
import KiyimPage from './Pages/KiyimPage.jsx';
import KorzinkaPage from './Pages/KorzinkaPage.jsx';
import KrasotaPage from './Pages/KrasotaPage.jsx';
import RasprodajaPage from './Pages/RasprodajaPage.jsx';
import RubejPage from './Pages/RubejPage.jsx';
import UyPage from './Pages/Uypage.jsx';
import Coin from './Pages/Coin.jsx';
import './i18n.js'
import Korzinasavat from './Pages/korzinasavat.jsx';

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
        path: "/rasprodaja",
        element: <Rasprodaja/>
      },
        {
        path: "/savat",
        element: <Korzinasavat/>
      },
       {
        path: "/korzina",
        element: <Korzina/>
      },
       {
        path: "/rub",
        element: <Rubej/>
      },  {
        path: "/kiyim",
        element: <Kiyim/>
      },
      {
        path: "/uy",
        element: <Uy/>
      },
       {
        path: "/kra",
        element: <Krasota/>
      },
        {
        path: "/el",
        element: <Elektronika/>
      },
        {
        path: "/katalog",
        element: <Katalog/>
      },
       
         {
        path: "/elektr/:id",
        element: <ElektronikaPage/>
      },
       {
        path: "/kiyim/:id",
        element: <KiyimPage/>
      },
      {
        path: "/korzina/:id",
        element: <KorzinkaPage/>
      },
       {
        path: "/krasota/:id",
        element: <KrasotaPage/>
      },
      {
        path: "/ras/:id",
        element: <RasprodajaPage/>
      },
           {
        path: "/ru/:id",
        element: <RubejPage/>
      },
              {
        path: "/uy/:id",
        element: <UyPage/>
      },
             {
        path: "/coin",
        element: <Coin/>
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
