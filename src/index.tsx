import { createRoot } from "react-dom/client";
import { App } from "./app/App";

try {
    const root = document.getElementById("root");

    root ? createRoot(root)?.render(<App />) : undefined;
} catch (error) {
    console.log(error);
}
