import { ReactNode } from "react";
import styled from "styled-components";

type Properties = {
    children: ReactNode;
};

const Container = styled.div`
    text-align: center;
`;

export const Main = function ({ children }: Properties) {
    return <Container>{children}</Container>;
};