import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";

const AppRoutes = () => (
    <Routes>
        <Route index element={<Home />} />
    </Routes>
);

export default () => (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
);
