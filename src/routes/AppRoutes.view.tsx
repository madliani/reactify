import { Route, Routes } from "react-router";
import Homepage from "../pages/HomePage/HomePage";

const AppRouteView = () => (
    <Routes>
        <Route index element={<Homepage />} />
    </Routes>
);

export default AppRouteView;
