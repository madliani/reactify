import { HelmetProvider } from "react-helmet-async";
import AppRouter from "../router/AppRouter";

const AppView = () => (
    <HelmetProvider>
        <AppRouter />
    </HelmetProvider>
);

export default AppView;
