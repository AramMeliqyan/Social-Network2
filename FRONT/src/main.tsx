import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { Dashboard } from './pages/Profile/Dashboard'
import { UpdatePassword } from './pages/settings/update-password'
import { UpdateLogin } from './pages/settings/update-login'
import { Settings } from './pages/settings'

const routes = createBrowserRouter([
  {
    path:'',
    element:<Signup/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:"profile",
    element:<Profile/>,
    children:[
      {
        path:"",
        element:<Dashboard/>
      },
      {
        path:"settings",
        element:<Settings/>
      },
      {
        path:"update/login",
        element:<UpdateLogin/>
      },
      {
        path:"update",
        element:<UpdatePassword/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider  router={routes}>
    </RouterProvider>
  </StrictMode>,
)
