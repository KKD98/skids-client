import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage.jsx';
import Main from './Main/Main.jsx';
import AddUser from './components/AddUser/AddUser.jsx';
import UpdateUser from './components/UpdateUser/UpdateUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: 
    [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "adduser",
        element: <AddUser></AddUser>
      },
      {
        path: "updateuser/:id",
        element: <UpdateUser></UpdateUser>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
