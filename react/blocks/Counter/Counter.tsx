import counterHook from "@react/blocks/Counter/Counter.hook"
import CounterView from "@react/blocks/Counter/Counter.view"

export default () => {
    const { count, decrementCount, incrementCount, isCountZero, resetCount } =
        counterHook.use()

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
