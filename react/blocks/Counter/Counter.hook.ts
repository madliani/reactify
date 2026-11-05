import { useStore } from "@nanostores/react"
import CounterAtom from "@react/blocks/Counter/Counter.atom"

const use = () => {
    const count = useStore(CounterAtom.store)
    const isCountZero = count === 0

    const decrementCount = () => CounterAtom.decrement()
    const incrementCount = () => CounterAtom.increment()
    const resetCount = () => CounterAtom.reset()

    return { count, decrementCount, incrementCount, isCountZero, resetCount }
}

export default { use }
