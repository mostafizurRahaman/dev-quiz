import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./components/Home/Home";
import { getTopicsData } from "./LoaderData/TopicsLoader";
import Quizes from "./components/Quizes/Quizes";
import Error from "./components/Error/Error";
import Statistic from "./components/Statistic/Statistic";
import Blog from "./components/Blog/Blog";
function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Main></Main>,
         children: [
            { path: "/", loader: getTopicsData, element: <Home></Home> },
            { path: "/home", loader: getTopicsData, element: <Home></Home> },
            { path: "/topics", loader: getTopicsData, element: <Home></Home> },
            {
               path: "/topic/:topicId",
               loader: async ({ params }) => {
                  return fetch(
                     `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
                  );
               },
               element: <Quizes></Quizes>,
            },
            {
               path: "/statistic",
               loader: getTopicsData,
               element: <Statistic></Statistic>,
            },
            {
               path: "/blog",
               element: <Blog></Blog>,
            },
         ],
      },
      {
         path: "*",
         element: <Error></Error>,
      },
   ]);
   return <RouterProvider router={router}></RouterProvider>;
}

export default App;
