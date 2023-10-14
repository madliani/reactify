import styled, { keyframes } from "styled-components";
import logo from "../../assets/images/logo.svg";
import { Code } from "./Code";

// eslint-disable @typescript-eslint/no-unsafe-assignment @typescript-eslint/no-unsafe-member-access @typescript-eslint/no-unsafe-call
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

// eslint-disable @typescript-eslint/no-unsafe-assignment @typescript-eslint/no-unsafe-member-access @typescript-eslint/no-unsafe-call
const imageAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

// eslint-disable @typescript-eslint/no-unsafe-assignment @typescript-eslint/no-unsafe-member-access @typescript-eslint/no-unsafe-call
const ImageWrapper = styled.img`
    pointer-events: none;
    height: 40vmin;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${imageAnimation} infinite 20s linear;
    }
`;

// eslint-disable @typescript-eslint/no-unsafe-assignment @typescript-eslint/no-unsafe-member-access @typescript-eslint/no-unsafe-call
const AnchorWrapper = styled.a`
    color: #61dafb;
`;

export const Header = () => {
    return (
        <HeaderWrapper>
            <ImageWrapper alt="logo" src={logo} />
            <p>
                Edit <Code /> and save to reload.
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
