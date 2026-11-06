import { useStore } from "@nanostores/react"
import CounterAtom from "@react/blocks/Counter/Counter.atom"

const decrementCount = () => CounterAtom.decrement()

const incrementCount = () => CounterAtom.increment()

const resetCount = () => CounterAtom.reset()

const updateCount = (count: number) => CounterAtom.set(count)

const use = () => {
    const count = useStore(CounterAtom.store)
    const isCountZero = count === 0

    return {
        count,
        decrementCount,
        incrementCount,
        isCountZero,
        resetCount,
        updateCount
    }
}

export default { use }
