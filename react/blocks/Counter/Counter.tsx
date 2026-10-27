import { useStore } from "@nanostores/react"
import {
    counterAtom,
    decrementCount,
    incrementCount
} from "@react/blocks/Counter/Counter.atom"
import {
    CounterView,
    counterViewStyles
} from "@react/blocks/Counter/Counter.view"

const useCounter = () => {
    const count = useStore(counterAtom)
    const decIsDisabled = count === 0

    const increment = () => incrementCount()
    const decrement = () => decrementCount()

    return { count, decIsDisabled, decrement, increment }
}

const Counter = () => {
    const { count, decIsDisabled, decrement, increment } = useCounter()

    return (
        <CounterView
            count={count}
            decIsDisabled={decIsDisabled}
            decrement={decrement}
            increment={increment}
            styles={counterViewStyles}
        />
    )
}

export { Counter, counterAtom, useCounter }
