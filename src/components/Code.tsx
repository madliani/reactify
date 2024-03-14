import { useAtom } from "jotai";
import { useEffect } from "react";
import styled from "styled-components";
import { storeAtom } from "../jotai/atoms/store";

const { VITE_CODE: CODE } = import.meta.env;

const CodeWrapper = styled.code`
    font-family:
        source-code-pro,
        Menlo,
        Monaco,
        Consolas,
        Courier New,
        monospace;
`;

export const Code = () => {
    const [store, setStore] = useAtom(storeAtom);
    const { code } = store;

    useEffect(() => {
        if (!code && CODE) {
            setStore({
                code: CODE
            });
        }
    }, [code, setStore]);

    return <CodeWrapper data-testid="code">{code}</CodeWrapper>;
};
