import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Comments from "./components/Comments/Comments";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Users from "./components/Users/Users";
import Layout from "./layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
        },
        {
          path: "/comments",
          element: <Comments />,
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/comments");
          },
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
