import { ReactNode } from "react";
import styled from "styled-components";

type Properties = {
    children: ReactNode;
};

// eslint-disable @typescript-eslint/no-unsafe-assignment @typescript-eslint/no-unsafe-member-access @typescript-eslint/no-unsafe-call
const Container = styled.div`
    text-align: center;
`;

export const Main = ({ children }: Properties) => {
    return <Container>{children}</Container>;
};
