import { createRoot } from "react-dom/client";
import { App } from "./app/App";

const main = () => {
    try {
        const rootElement = document.getElementById("root");

        if (rootElement === null) {
            console.error('DOM element with ID "root" was not found.');

            return;
        }

        const root = createRoot(rootElement);

        root.render(<App />);
    } catch (error) {
        console.error(error);
    }
};

document.addEventListener("DOMContentLoaded", () => main());
