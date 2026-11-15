import CounterHook from "@react/blocks/Counter/Counter.hook"
import "@react/blocks/Counter/Counter.tw.css"
import CounterView from "@react/blocks/Counter/Counter.view"

export default () => {
    const {
        count,
        decrementCount,
        incrementCount,
        isCountZero,
        onMountCounter,
        resetCount
    } = CounterHook.use()

    onMountCounter()

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
