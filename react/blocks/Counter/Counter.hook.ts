import { useStore } from "@nanostores/react"
import {
    decrement,
    increment,
    reset,
    store
} from "@react/blocks/Counter/Counter.atom"

const useCounter = () => {
    const count = useStore(store)
    const isDisabled = count === 0

    const decrementCount = () => decrement()
    const incrementCount = () => increment()
    const resetCount = () => reset()

    return { count, decrementCount, incrementCount, isDisabled, resetCount }
}

export { useCounter }
