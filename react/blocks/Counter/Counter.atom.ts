import { atom, type PreinitializedWritableAtom } from "nanostores"

export interface CounterAtom {
    decrement: Decrement
    increment: Increment
    reset: Reset
    store: Store
}

type Decrement = () => void
type Increment = () => void
type Reset = () => void

type Store = PreinitializedWritableAtom<number>

const DEFAULT_COUNT = 0

const store = atom<number>(DEFAULT_COUNT) as Store

const decrement: Decrement = () => store.set(store.get() - 1)

const increment: Increment = () => store.set(store.get() + 1)

const reset: Reset = () => store.set(DEFAULT_COUNT)

export default {
    decrement,
    increment,
    reset,
    store
} as const satisfies CounterAtom
