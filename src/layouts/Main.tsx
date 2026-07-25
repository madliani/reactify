import { ReactNode } from "react";

type MainProps = Readonly<{
    children: ReactNode;
}>;

const Main = ({ children }: MainProps) => {
    return <div className="container">{children}</div>;
};

export default Main;
