import { useStore } from "@nanostores/react"
import {
    countAtom,
    decrementCount,
    incrementCount,
    resetCount
} from "@react/blocks/Counter/Counter.atom"

const useCounter = () => {
    const count = useStore(countAtom)
    const isDisabled = count === 0

    return { count, decrementCount, incrementCount, isDisabled, resetCount }
}

export { useCounter }
