import { atom } from "nanostores"

const INITIAL_COUNT = 0

const countAtom = atom<number>(INITIAL_COUNT)

const decrementCount = () => countAtom.set(countAtom.get() - 1)
const incrementCount = () => countAtom.set(countAtom.get() + 1)
const resetCount = () => countAtom.set(INITIAL_COUNT)

export { countAtom, decrementCount, incrementCount, resetCount }
