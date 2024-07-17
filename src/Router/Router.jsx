import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ApproveUser from "../Pages/Dashboard/AdminPage/ApproveUser";
import AllPayment from "../Pages/Dashboard/AdminPage/AllPayment";

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
    </PrivateRouter>,
    children : [
      {
        path : "",
        element : <ApproveUser></ApproveUser>
      },
      {
        path : "payment",
        element : <AllPayment></AllPayment>
      }
    ]
  }
]);

export default router;
