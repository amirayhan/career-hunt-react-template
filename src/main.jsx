import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Main from "./components/Layout/Main";
import Statistics from "./components/Statistics/Statistics";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "statistics",
                element: <Statistics></Statistics>,
            },
            {
                path: "appliedjobs",
                element: <AppliedJobs></AppliedJobs>,
            },
            {
                path: "blog",
                element: <Blog></Blog>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
