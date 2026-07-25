import { ReactNode } from "react";

type MainProperties = Readonly<{
    children: ReactNode;
}>;

const Main = ({ children }: MainProperties) => {
    return <div className="container">{children}</div>;
};

export default Main;
