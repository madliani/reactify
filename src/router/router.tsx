import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "../pages/Homepage";

const AppRoutes = () => (
    <Routes>
        <Route index element={<Homepage />} />
    </Routes>
);

export default () => (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
);
