import { Route, Routes } from "react-router";
import Homepage from "../pages/HomePage";

const AppRoutes = () => (
    <Routes>
        <Route index element={<Homepage />} />
    </Routes>
);

export default AppRoutes;
