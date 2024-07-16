import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import "react-toastify/dist/ReactToastify.css";
import UserAuth from "./UserAuth/UserAuth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuth>
      <RouterProvider router={router} />
    </UserAuth>
  </React.StrictMode>
);
