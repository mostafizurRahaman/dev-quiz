import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import { getTopicsData } from './LoaderData/TopicsLoader';

function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Main></Main>, children: [
      {path: "/",loader:getTopicsData , element: <Home></Home>}, 
      {path: "/home",loader: getTopicsData, element: <Home></Home>}, 
      {path: "/topics",loader: getTopicsData, element: <Home></Home>}, 
    ]}
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
