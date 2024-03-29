import { ReactNode } from "react";
import styled from "styled-components";

type Properties = Readonly<{
    children: ReactNode;
}>;

const Container = styled.div`
    text-align: center;
`;

export const Main = ({ children }: Properties) => {
    return <Container>{children}</Container>;
};
