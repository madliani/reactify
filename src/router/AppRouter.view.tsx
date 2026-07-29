import { BrowserRouter } from "react-router";
import { AppRoutes } from "../routes/AppRoutes";

export const AppRouterView = () => (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
);
