import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>Invalid Page</h1>,
    children: [
      {
        index: true,
        path: "/AboutMe",
        element: <AboutMe/>
      },
      {
        path: "/Skills",
        element: <Skills/>
      },
      {
        path: "/Projects",
        element: <Projects/>
      },
      {
        path: "/Contacts",
        element: <Contacts/>
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
