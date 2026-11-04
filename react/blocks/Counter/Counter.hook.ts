import { useStore } from "@nanostores/react"
import counterAtom from "@react/blocks/Counter/Counter.atom"

const useCounter = () => {
    const count = useStore(counterAtom.store)
    const isDisabled = count === 0

    const decrementCount = () => counterAtom.decrement()
    const incrementCount = () => counterAtom.increment()
    const resetCount = () => counterAtom.reset()

    return { count, decrementCount, incrementCount, isDisabled, resetCount }
}

export { useCounter }
