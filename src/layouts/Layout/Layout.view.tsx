import { LayoutProps } from "./Layout.type";

const LayoutView = ({ children }: LayoutProps) => (
    <main className="layout">{children}</main>
);

export default LayoutView;
