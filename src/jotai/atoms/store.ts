import { atom } from "jotai";

export type Store = Readonly<{
    code: string;
}>;

export const storeAtom = atom<Store>({
    code: ""
});
