import { HelmetProvider } from "react-helmet-async";
import AppRouter from "../router/AppRouter";
import "./App.style.css";

const App = () => (
    <HelmetProvider>
        <AppRouter />
    </HelmetProvider>
);

export default App;
