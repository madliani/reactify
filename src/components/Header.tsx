import styled, { keyframes } from "styled-components";

import logo from "../../assets/images/logo.svg";

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
    color: white;
    background-color: #282c34;
`;

const imageAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const ImageWrapper = styled.img`
    pointer-events: none;
    height: 40vmin;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${imageAnimation} infinite 20s linear;
    }
`;

const CodeWrapper = styled.code`
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
`;

const AnchorWrapper = styled.a`
    color: #61dafb;
`;

export const Header = function () {
    return (
        <HeaderWrapper>
            <ImageWrapper src={logo} alt="logo" />
            <p>
                Edit <CodeWrapper>src/App.tsx</CodeWrapper> and save to reload.
            </p>
            <AnchorWrapper
                href="https://reactjs.org"
                rel="noopener noreferrer"
                target="_blank"
            >
                Learn React
            </AnchorWrapper>
        </HeaderWrapper>
    );
};
