import { atom } from "nanostores"

const DEFAULT_COUNT = 0

const store = atom<number>(DEFAULT_COUNT)

const decrement = () => store.set(store.get() - 1)

const get = () => store.get()

const increment = () => store.set(store.get() + 1)

const reset = () => store.set(DEFAULT_COUNT)

const set = (count: number) => store.set(count)

export default { decrement, get, increment, reset, set, store }
