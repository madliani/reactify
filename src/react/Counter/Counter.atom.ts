import { atom } from "nanostores"

const counterAtom = atom<number>(0)

const incCount = () => counterAtom.set(counterAtom.get() + 1)
const decCount = () => counterAtom.set(counterAtom.get() - 1)

export { counterAtom, decCount, incCount }
