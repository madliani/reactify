import { useStore } from "@nanostores/react"
import {
    counterAtom,
    decrementCount,
    incrementCount
} from "@react/blocks/Counter/Counter.atom"
import { CounterView } from "@react/blocks/Counter/Counter.view"

const useCounter = () => {
    const count = useStore(counterAtom)

    const increment = () => incrementCount()
    const decrement = () => decrementCount()

    return { count, decrement, increment }
}

const Counter = () => {
    const { count, decrement, increment } = useCounter()

    return (
        <CounterView
            count={count}
            decrement={decrement}
            increment={increment}
        />
    )
}

export { Counter, counterAtom, useCounter }
