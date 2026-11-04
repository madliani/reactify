import { atom } from "nanostores"

const INITIAL_COUNT = 0

const store = atom<number>(INITIAL_COUNT)

const decrement = () => store.set(store.get() - 1)
const increment = () => store.set(store.get() + 1)
const reset = () => store.set(INITIAL_COUNT)

export default { decrement, increment, reset, store }
