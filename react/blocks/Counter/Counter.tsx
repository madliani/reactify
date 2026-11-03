import { useCounter } from "@react/blocks/Counter/Counter.hook"
import { CounterView } from "@react/blocks/Counter/Counter.view"

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

export { Counter }
