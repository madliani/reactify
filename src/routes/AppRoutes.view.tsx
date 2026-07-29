import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage/HomePage";

const AppRouteView = () => (
    <Routes>
        <Route index element={<HomePage />} />
    </Routes>
);

export default AppRouteView;
