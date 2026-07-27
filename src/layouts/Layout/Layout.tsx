import "./Layout.style.css";
import { LayoutProps } from "./Layout.type";
import LayoutView from "./Layout.view";

const Layout = (props: LayoutProps) => <LayoutView {...props} />;

export default Layout;
