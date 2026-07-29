import { LayoutProps } from "./Layout.type";

export const LayoutView = ({ children }: LayoutProps) => (
    <main className="layout">{children}</main>
);
