
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Service from './components/service/Service'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      children:[
        {
          path: '/contact',
          loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
          element:<Contact></Contact>
        },
        {
          path: '/about',
          element:<About></About>
        },
        {
          path: '/service',
          element:<Service></Service>
        },
      ]
    },
    
  ])
  return (
    <div>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  )
}

export default App
