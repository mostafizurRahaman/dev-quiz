import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Main></Main>, children: [
      {path: "/", element: <Home></Home>}, 
      {path: "/home", element: <Home></Home>}, 
      {path: "/topics" ,element: <Home></Home>}, 
    ]}
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
