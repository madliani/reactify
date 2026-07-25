import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Home } from "../pages/Home";

const routes: Readonly<RouteObject>[] = [
    {
        element: <Home />,
        path: "/"
    }
];

export const router = createBrowserRouter(routes);
