import "./App.scss";

import { RouterProvider } from "react-router-dom";

import { router } from "../router/router";

export const App = function () {
    return <RouterProvider router={router} />;
};
