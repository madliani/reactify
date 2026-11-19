import CounterHooks from "@react/blocks/Counter/Counter.hooks"
import "@react/blocks/Counter/Counter.tw.css"
import CounterView from "@react/blocks/Counter/Counter.view"

export default () => {
    const { count, decrementCount, incrementCount, isCountZero, resetCount } =
        CounterHooks.use()

    CounterHooks.onMount()

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
