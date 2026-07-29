import { HelmetProvider } from "react-helmet-async";
import { AppRouter } from "../router/AppRouter";

export const AppView = () => (
    <HelmetProvider>
        <AppRouter />
    </HelmetProvider>
);
