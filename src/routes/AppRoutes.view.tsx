import { Route, Routes } from "react-router";
import { HomePage } from "../pages/HomePage/HomePage";

export const AppRouteView = () => (
    <Routes>
        <Route index element={<HomePage />} />
    </Routes>
);
