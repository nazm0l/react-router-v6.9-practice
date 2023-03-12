import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Comments from "./components/Comments/Comments";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/comments",
      element: <Comments />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
