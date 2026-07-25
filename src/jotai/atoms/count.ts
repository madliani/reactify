import { atom } from "jotai";

export type Count = number;

export const countAtom = atom<Count>(0);
