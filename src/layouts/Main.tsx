import { ReactNode } from "react";

type Properties = Readonly<{
    children: ReactNode;
}>;

export const Main = ({ children }: Properties) => {
    return <div className="container">{children}</div>;
};
