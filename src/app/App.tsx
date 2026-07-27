import { HelmetProvider } from "react-helmet-async";
import AppRouter from "../router/AppRouter";
import "../styles/index.css";

const App = () => (
    <HelmetProvider>
        <AppRouter />
    </HelmetProvider>
);

export default App;
