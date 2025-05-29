import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Header from './components/Header.jsx';
import AddTask from './components/AddTask.jsx';
import BrowseTask from './components/BrowseTask.jsx';
import MyTask from './components/MyTask.jsx';
import Auth from './layouts/Auth.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Home from './components/Home.jsx';
import TaskDetails from './components/TaskDetails.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {index:true,Component:Home},
      {path:'addtask', Component:AddTask},
      {path:'browsetask', Component:BrowseTask,
        loader:()=>fetch('http://localhost:3000/addtask')
      },
      {path:'taskdetails/:id', Component:TaskDetails,
        loader:({params})=>fetch(`http://localhost:3000/addtask/${params.id}`)
      },
      {path:'mypostedtask', Component:MyTask},
    ]
  },
 {
    path: "/auth",
    Component: Auth,
    children:[
      {
path:'/auth/login',
Component:Login
},
      {
path:'/auth/register',
Component:Register
}
    ]
  },
  
  {
    path: "/*",
    element:<h1 className="text-red-700 text-3xl">Error 404</h1>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
