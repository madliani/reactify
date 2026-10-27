import { useStore } from "@nanostores/react"
import {
    counterAtom,
    decrementCount,
    incrementCount
} from "@react/components/Counter/Counter.atom"
import {
    CounterView,
    counterViewStyles
} from "@react/components/Counter/Counter.view"

const useIncrement = () => {
    const increment = () => incrementCount()

    return { increment }
}

const useDecrement = (count: number) => {
    const decrement = () => decrementCount()
    const decIsDisabled = count === 0

    return { decIsDisabled, decrement }
}

const useCounter = () => {
    const count = useStore(counterAtom)
    const { increment } = useIncrement()
    const { decIsDisabled, decrement } = useDecrement(count)

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
