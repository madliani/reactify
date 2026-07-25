import { ReactNode } from "react";

export type MainProps = Readonly<{
    children: ReactNode;
}>;

const Main = ({ children }: MainProps) => (
    <main className="main">{children}</main>
);

export default Main;
