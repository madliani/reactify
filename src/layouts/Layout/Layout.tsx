import "./Layout.style.css";
import { LayoutProps } from "./Layout.type";
import { LayoutView } from "./Layout.view";

export const Layout = (props: LayoutProps) => <LayoutView {...props} />;
