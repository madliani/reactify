import { useAtom } from "jotai";
import { useEffect } from "react";
import { storeAtom } from "../jotai/atoms/store";

const { VITE_CODE: CODE } = import.meta.env;

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

    return <code data-testid="code">{code}</code>;
};
