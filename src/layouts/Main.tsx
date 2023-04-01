import { ReactNode } from "react";

type Properties = {
    children: ReactNode;
};

export const Main = function ({ children }: Properties) {
    return <div className="App">{children}</div>;
};
