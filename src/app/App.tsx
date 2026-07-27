import { HelmetProvider } from "react-helmet-async";
import AppRouter from "../router/AppRouter";
import "../styles/index.css";

export const App = () => {
    return (
        <HelmetProvider>
            <AppRouter />
        </HelmetProvider>
    );
};
