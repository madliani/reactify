import type { RouteRecord } from "vite-react-ssg";
import { Home } from "../pages/Home";

export const routes: Readonly<RouteRecord>[] = [
    {
        element: <Home />,
        path: "/"
    }
];
