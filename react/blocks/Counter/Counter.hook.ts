import { useStore } from "@nanostores/react"
import {
    counterAtom,
    decrementCount,
    incrementCount
} from "@react/blocks/Counter/Counter.atom"

const useCounter = () => {
    const count = useStore(counterAtom)

    const increment = () => incrementCount()
    const decrement = () => decrementCount()

    return { count, decrement, increment }
}

export { useCounter }
