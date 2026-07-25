import "./styles/index.css";
import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./router/routes";

export const createRoot = ViteReactSSG({ routes });
