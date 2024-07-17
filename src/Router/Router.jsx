import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ApproveUser from "../Pages/Dashboard/AdminPage/ApproveUser";
import AllPayment from "../Pages/Dashboard/AdminPage/AllPayment";
import AdminPage from "./AdminPage";
import MoneySend from "../Pages/Dashboard/Userpage/MoneySend";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "adminaprove",
        element: (
          <AdminPage>
            <ApproveUser></ApproveUser>
          </AdminPage>
        ),
      },
      {
        path: "payment",
        element: (
          <AdminPage>
            <AllPayment></AllPayment>
          </AdminPage>
        ),
      },
      {
        path: "moneysend",
        element: <MoneySend></MoneySend>,
      },
    ],
  },
]);

export default router;
