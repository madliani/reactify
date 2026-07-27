import { HelmetProvider } from "react-helmet-async";
import AppRouter from "../router/AppRouter";
import "../styles/app.css";

const App = () => (
    <HelmetProvider>
        <AppRouter />
    </HelmetProvider>
);

export default App;
