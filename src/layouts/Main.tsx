import { ReactNode } from "react";

type Properties = Readonly<{
    children: ReactNode;
}>;

const Main = ({ children }: Properties) => {
    return <div className="container">{children}</div>;
};

export default Main;
