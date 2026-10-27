import { atom } from "nanostores"

const INITIAL_COUNT = 0

const counterAtom = atom<number>(INITIAL_COUNT)

const incrementCount = () => counterAtom.set(counterAtom.get() + 1)
const decrementCount = () => counterAtom.set(counterAtom.get() - 1)

export { counterAtom, decrementCount, incrementCount }
