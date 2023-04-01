import { RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { router } from "../router/router";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export const App = function () {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
};
