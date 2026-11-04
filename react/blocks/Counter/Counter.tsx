import { useCounter } from "@react/blocks/Counter/Counter.hook"
import { CounterView } from "@react/blocks/Counter/Counter.view"

const Counter = () => {
    const { count, decrement, increment, isDisabled } = useCounter()

    return (
        <CounterView
            count={count}
            decrement={decrement}
            increment={increment}
            isDisabled={isDisabled}
        />
    )
}

export { Counter }
