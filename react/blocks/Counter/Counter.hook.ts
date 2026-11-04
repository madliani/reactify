import { useStore } from "@nanostores/react"
import {
    counterAtom,
    decrementCount,
    incrementCount
} from "@react/blocks/Counter/Counter.atom"

const useCounter = () => {
    const count = useStore(counterAtom)
    const isDisabled = count === 0

    return { count, decrementCount, incrementCount, isDisabled }
}

export { useCounter }
