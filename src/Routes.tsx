import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const SignIn = lazy(() => import("./pages/auth/User"));


const route = createBrowserRouter([
    { path: "/login", element: <SignIn /> },
    {
        path: "/",
        element: <Dashboard />,
        children: [
        ]
    }
]);

export default route;
