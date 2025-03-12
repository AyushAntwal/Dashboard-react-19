import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Home from "./pages/dashboard/pages/Home";
import Upload from "./pages/dashboard/pages/upload/Upload";
import Settings from "./pages/dashboard/pages/settings/Settings";
import AuthLayout from "./pages/auth/AuthLayout";
import Password from "./pages/auth/ForgotPassword";
import OtpVerification from "./pages/auth/OtpVerification";

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Login = lazy(() => import("./pages/auth/Login"));


const route = createBrowserRouter([
    { path: "/login", element: <AuthLayout ><Login /></AuthLayout> },
    { path: "/reset", element: <AuthLayout ><Password /></AuthLayout> },
    { path: "/verify", element: <AuthLayout ><OtpVerification /></AuthLayout> },
    {
        path: "/",
        element: <Dashboard />,
        children: [
            { path: '', element: <Home />, },
            { path: '/upload', element: <Upload /> },
            { path: '/settings', element: <Settings /> }
        ]
    }
]);

export default route;
