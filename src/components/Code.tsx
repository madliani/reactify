import { useAtom } from "jotai";
import { useEffect } from "react";
import styled from "styled-components";
import { storeAtom } from "../jotai/atoms/store";

const CodeWrapper = styled.code`
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
`;

export const Code = () => {
    const [store, setStore] = useAtom(storeAtom);
    const { code } = store;

    useEffect(() => {
        if (!code) {
            setStore({
                code: "src/App.tsx"
            });
        }
    }, [code, setStore]);

    return <CodeWrapper data-testid="code">{code}</CodeWrapper>;
};
