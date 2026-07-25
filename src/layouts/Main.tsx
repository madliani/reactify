import { ReactNode } from "react";

export type MainProps = Readonly<{
    children: ReactNode;
}>;

const Main = ({ children }: MainProps) => (
    <div className="container">{children}</div>
);

export default Main;
