import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Clip from './components/Clip';
import ViewClip from './components/ViewClip';


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path:"/clips",
      element:
      <div>
        <Navbar />
        <Clip />
      </div>
    },
    {
      path:"/clips/:id",
      element:
      <div>
       <Navbar />
       <ViewClip />
      </div>
    },
  ]
);


function App() {
  

  return (
    <div className=' h-screen flex justify-center '>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
// h-screen flex items-center justify-centent