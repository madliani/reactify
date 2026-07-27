import { ReactNode } from "react";

export type LayoutProps = Readonly<{
    children: ReactNode;
}>;

const Layout = ({ children }: LayoutProps) => (
    <main className="layout">{children}</main>
);

export default Layout;
