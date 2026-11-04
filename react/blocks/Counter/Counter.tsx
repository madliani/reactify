import counterHook from "@react/blocks/Counter/Counter.hook"
import { CounterView } from "@react/blocks/Counter/Counter.view"

const Counter = () => {
    const { count, decrementCount, incrementCount, isDisabled, resetCount } =
        counterHook.use()

    return (
        <CounterView
            count={count}
            decrementCount={decrementCount}
            incrementCount={incrementCount}
            isDisabled={isDisabled}
            resetCount={resetCount}
        />
    )
}

export { Counter }
