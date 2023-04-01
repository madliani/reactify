import "./index.scss";

import { createRoot } from "react-dom/client";

import App from "./components/App/App";

try {
    const root = document.getElementById("root");

    root ? createRoot(root)?.render(<App />) : undefined;
} catch (error) {
    console.log(error);
}
