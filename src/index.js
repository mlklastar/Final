import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import Team from './pages/Team/Team';
import Players from './pages/Players/Players';
import Statistics from './pages/Statistics/Statistics';
import Jeu from './pages/Jeu/Jeu';
import Jeu2 from './pages/Jeu2/Jeu2';
import reportWebVitals from './reportWebVitals';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/Team/:sport",
    element: <Team></Team>,
  },
  {
    path: "/Players/:player",
    element: <Players></Players>,
  },
  {
    path: "/Statistics/:statistics",
    element: <Statistics></Statistics>,
  },
  {
    path: "/Jeu/:statistics",
    element: <Jeu></Jeu>,
  },
  {
    path: "/Jeu/",
    element: <Jeu2></Jeu2>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
