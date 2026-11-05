import { useStore } from "@nanostores/react"
import counterAtom from "@react/blocks/Counter/Counter.atom"

const use = () => {
    const count = useStore(counterAtom.store)
    const isCountZero = count === 0

    const decrementCount = () => counterAtom.decrement()
    const incrementCount = () => counterAtom.increment()
    const resetCount = () => counterAtom.reset()

    return { count, decrementCount, incrementCount, isCountZero, resetCount }
}

export default { use }
