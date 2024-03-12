import { RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { router } from "../router/router";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, Cantarell, "Droid Sans", "Fira Sans", "Helvetica Neue", Oxygen, Roboto, "Segoe UI", Ubuntu, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
};
