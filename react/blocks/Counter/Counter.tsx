import CounterHook from "@react/blocks/Counter/Counter.hook"
import CounterView from "@react/blocks/Counter/Counter.view"

export default () => {
    const { count, decrementCount, incrementCount, isCountZero, resetCount } =
        CounterHook.use()

    return (
        <CounterView
            count={count}
            decrementCount={decrementCount}
            incrementCount={incrementCount}
            isCounterZero={isCountZero}
            resetCount={resetCount}
        />
    )
}
