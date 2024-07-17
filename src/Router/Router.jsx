import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path : "/",
    element : <Login></Login>
  },
  {
    path : "/dashboard",
    element : <PrivateRouter>
        <Dashboard></Dashboard>
    </PrivateRouter>
  }
]);

export default router;
