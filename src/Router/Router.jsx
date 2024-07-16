import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path : "/login",
    element : <Login></Login>
  }
]);

export default router;
