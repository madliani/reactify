import { atom } from "jotai";

export type Store = {
    code: string;
};

export const storeAtom = atom<Store>({
    code: ""
});
