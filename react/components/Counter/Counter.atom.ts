import { atom } from "nanostores"

const INITIAL_COUNT = 0

const counterAtom = atom<number>(INITIAL_COUNT)

const incCount = () => counterAtom.set(counterAtom.get() + 1)
const decCount = () => counterAtom.set(counterAtom.get() - 1)

export { counterAtom, decCount, incCount }
