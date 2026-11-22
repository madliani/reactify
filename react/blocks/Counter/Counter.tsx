import CounterHooks from "@react/blocks/Counter/Counter.hooks"

import "@react/blocks/Counter/Counter.tw.css"
import CounterView from "@react/blocks/Counter/Counter.view"
import type { JSX } from "react"

function Counter(): JSX.Element {
    const { count, decrementCount, incrementCount, isCountZero, resetCount } =
        CounterHooks.use()

    CounterHooks.useOnMount()

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

export default Counter
